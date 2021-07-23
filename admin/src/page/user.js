import React, { useEffect, useState } from "react";
// @material-ui/core components
import $ from "jquery";
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import './style/form.css'
import CardFooter from "components/Card/CardFooter";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import ServiceUser from "./service/usersService";
import ServiceSUser from "./service/superUserService";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Search from "@material-ui/icons/Search";
// core components
import tableStyles from "assets/jss/material-dashboard-react/components/tableStyle.js";
import RegularButton from "components/CustomButtons/Button";
import serialize from "form-serialize";

const styles = {
  avatar:{

    width: '200px',
    height: 'auto',
    margin: 'auto',
    display: 'block',
    borderRadius: '50%'
  },
  center:{
    margin: 'auto',
    display: 'block',
  },


  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF",
    },
  },
  seacrhArea: {
    color: "#FFFFFF",
  },

  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  ...tableStyles,
};

const useStyles = makeStyles(styles);

export default function PersonsList() {

  const [listInfo, setInfo] = useState([])
  const [listTable, setList] = useState([])
  const [offset, setPage] = useState(0)
  const [choosen, setChoosen] = useState({})
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]); 
  const [userService, setUserService] = useState(true); 
  const [edit,setEdit] = useState(false);
  const [post, setPosts] = useState([]);
  useEffect(async()=>{

      getData(offset)

  },[offset,userService])


  useEffect(()=>{
    if(search === '' )
    {
      console.log('empty')
      setPage(0);
    }
    else
    {
      serviceSwitch().find({filter: search}).then((list)=>{
        const {data} = list;
        setInfo(data);
       let items = [];
         for (let user of data)
         {
          items.push([user.id, user.name, user.data?.working ? user.data.working : 'No given'])
         }
       setList(items);
   
      })
    }
  },[search])


  const serviceSwitch = () => {
    return userService ? ServiceUser : ServiceSUser;
  }



  const getData = (offset) =>{
    serviceSwitch().list({offset}).then((list)=>{
      const {data} = list;
      setInfo(data);
     let items = [];

       for (let user of data)
       {
        console.log(user)
         items.push([user.id, user.name, user.data.working ? user.data.working : 'No given'])
       }
     setList(items)
 
    })
  }

  const getMovie = (id) =>{
    console.log(id)
    let item = listInfo.filter(x=>x.id === id )[0];
    setChoosen(item) 
    serviceSwitch().getPosts({id}).then((res) => {
      const {data} = res;
      setPosts(data)
    })
    setEdit(true);

  }

  const submitForm = () =>{
    var infoData = $("#info")[0];
    var obj1 = serialize(infoData, { hash: true });
    var data = $("#data")[0];
    var obj2 = serialize(data, { hash: true });
    if(images.length > 0)
    {
      obj1.photo = images
    }
    console.log({obj1,obj2});
    if(edit){
      const data={id:choosen.id, data: obj1}
      serviceSwitch().update(data).then(()=> setPage('reload'));
    } else {
      serviceSwitch().add({data: obj1}).then(()=> setPage('reload'));
    }
  }
  const classes = useStyles();


  const changeInput = (field, value,info) => {
    let form =  JSON.parse(JSON.stringify(choosen));
    switch (info) {
      case 1:
        {
          let item = form.data;
          item[field] = value.toString();
          form.data = item;
          break;
        }
      default:
        {
          form[field] = value.toString();
          break;
        }
    }
    setChoosen(form);
  }


  const eloPercent = (elo) =>{
    if(elo){
      if(elo >= 10000){
        return 100
      } else {
        let percent = ((elo/10000)*100)
        if(percent.toString().length === 1){
          return 0;
        }
        return percent.toString()[0] + '0'
      }
    }
    return 0;

  }

  const switchBranch = () =>{
    setUserService(!userService);
    setPage(0);
  }

  
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>{
              userService ? "User's table" : "S-user's table"
            }</h4>
            <input onChange={(e)=>setSearch(e.target.value)}/>
            <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
        <RegularButton color="danger" onClick={()=>{setChoosen({})}}><Add/> Add new </RegularButton>
        <RegularButton color="warning" onClick={()=>{switchBranch()}}>Switch to {
          userService ? 'S-User' : 'User'
        }</RegularButton>
          </CardHeader>
          <CardBody>

      <Table className={classes.table}>
        
          <TableHead className={classes["primary TableHeader"]}>
            <TableRow className={classes.tableHeadRow} >
              {["id", "name", "workplace"].map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>

        <TableBody>
          {listTable.map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}  onClick={()=>getMovie(prop[0])}>
                {prop.map((prop, key) => {
                  return (
                    <TableCell className={classes.tableCell} key={key}>
                      {prop}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
          </CardBody>
          <CardFooter>
          <Button color="primary" disabled={offset === 0} onClick={()=>setPage(offset - 20)}>Previous</Button>
          <Button color="primary" onClick={()=>setPage(offset + 20)}>Next</Button>
          </CardFooter>
        </Card>
      </GridItem>
      <GridItem  xs={12} sm={12} md={6}>
           
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>{choosen?.name || 'Add new person to database'  }</h4>
          {choosen?.name ? null:           
          <p className={classes.cardCategoryWhite}>
            Here is a subtitle for this table
          </p>
          }
          <RegularButton color="danger" onClick={()=>submitForm()}>{edit ? 'Edit' : 'Add'}</RegularButton>
          

        </CardHeader>
        <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <img src={choosen.image? choosen.image :  
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'
            } className={classes.avatar}  />
            <input className={classes.center} type="file" accept="image/*" onChange={(e)=>{setImages(e.target.value) }}/>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
          <form action="" id='info' className="contact-form">
          <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input name="name" type="text" placeholder="Name" value={choosen.name || '' } onChange={(e)=>changeInput('name', e.target.value)}/>
                  <span>Name</span>
                  </label>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                  <span>ACTIVE  <input name="status" type="checkbox" placeholder="status" checked={choosen.status ||  false } onChange={(e)=>changeInput('status', e.target.checked)}/></span>
                  {choosen.role ? null :                   
                  <select name = 'role'>
                    <option value='user'>Role: User</option>
                    <option value='s-user'>Role: Super User</option>
                  </select>}
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input name="email" placeholder="email" type="text" value = { choosen.email || ''} onChange={(e)=>changeInput('email', e.target.value)} />
                  <span>Email</span>
                  </label>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input name="slug" placeholder="slug" type="text" value = { choosen.slug || ''} onChange={(e)=>changeInput('slug', e.target.value)} />
                  <span>Slug</span>
                  </label>
                  </GridItem> 
          </GridContainer>
          </form>
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
          <form action="" id='data' className="contact-form">
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
            <label>
            <input name="working" type="text" placeholder="working" value={choosen.data?.working || '' } onChange={(e)=>changeInput('working', e.target.value, 1)}/>
            <span>Work at </span>
            </label>
            </GridItem>
            {
              choosen.data?.elo ?             
              <GridItem xs={12} sm={12} md={12}>
              <div className="skills">
                <div className="progressBar">
                  <h4>Elo </h4>
                  <div className="progressBarContainer">
                    <div className={`progressBarValue value-${eloPercent(choosen.data.elo || 0)}`}></div>
                  </div>
                  <small>Progress to super user - {choosen.data.elo || 0}/10000</small>
                </div>
              </div>
              </GridItem> : null 
            }
        
          </GridContainer>
          <h5>Post history</h5>
         <div className="overflow-container">
         {
           post.map((el, idx)=>{
            return (
              <form action="" id={`crew${idx + 1}`} className="contact-form card " key={idx}>

                <div>
                  <span className='remove' > X Remove</span>
                  {/* onClick={()=>removeCast(idx)} */}
                </div>

              <GridContainer >
                <GridItem xs={6} sm={6} md={6}>

                <span>{el.title}</span>

                </GridItem>
                <GridItem xs={6} sm={6} md={6}>
                <span>type: {el.type}</span><hr/>
                <small>slug: {el.slug}</small>
                </GridItem>
                <GridItem xs={6} sm={6} md={6}>

                {Object.values(el.tags).forEach(val => {
                  return <small>{val}</small>
                })}

                </GridItem>
              </GridContainer>
            </form>
            )

          })       
          }


         </div>

          </form>
          </GridItem>
        </GridContainer>
        </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
