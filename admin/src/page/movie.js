import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import $ from "jquery";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import serialize from "form-serialize";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import RegularButton from "components/CustomButtons/Button";
import CardFooter from "components/Card/CardFooter";
import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import filmsService from "./service/filmsService";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Search from "@material-ui/icons/Search";
// core components
import tableStyles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const styles = {
  moviePoster:{

    width: '200px',
    height: 'auto',
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

export default function MovieList() {

  const [listInfo, setInfo] = useState([])
  const [listTable, setList] = useState([])
  const [offset, setPage] = useState(0)
  const [choosen, setChoosen] = useState({info: {}})
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const season = {id: 0 ,season_name: '', summary: '', starting:'', episodes: []}
  // const cast = {personName: '', characterName: ''}
  const [crew, setCrew] = useState([]);
  const [edit,setEdit] = useState(false);
  // const episode = {id: 0, name: '', airDate: '', summary: ''}

  const [seasonList, setSeasons] = useState([]);

  useEffect(async()=>{

      getData(offset)

  },[offset])


  useEffect(()=>{
    if(search === '' )
    {
      console.log('empty')
      setPage(0);
    }
    else
    {
      filmsService.find({filter: search}).then((list)=>{
        const {data} = list;

        setInfo(data);
       let items = [];
         for (let product of data)
         {
           let info = JSON.parse(product.info );
           items.push([product.id, product.type, info.name]);
         }
       setList(items);
   
      })
    }
  },[search])


  const submitForm = () =>{

    var seasons = [];

    for(let i = 1 ; i <= seasonList.length; i++)
    {
      var data = $(`#season${i}`)[0];
      seasons.push(serialize(data, { hash: true }))
    }
    var casts = [];
    for(let i = 1 ; i <= crew.length; i++)
    {
      var cast = $(`#crew${i}`)[0];
      casts.push(serialize(cast, { hash: true }))
    }
    var formData = $("#info")[0];
    var typeData= $('#type')[0];
    var info = serialize(formData, { hash: true });
    var type =  serialize(typeData, { hash: true });
    if(images.length > 0)
    {
      info.photo = images
    }
    info.season = seasons;
    if(!edit){
      filmsService.add({data:{type, info,crews: casts}});
    } else {
      filmsService.update({id: choosen.id, data:{ type, info,crews: casts}});
    }

  }

  const getData = (offset) =>{
    filmsService.list({offset}).then((list)=>{
      const {data} = list;
      setInfo(data);
     let items = [];
       for (let product of data)
       {
         product.photos = product.photos.slice(1,product.photos.length - 1);
         items.push([product.id, product.type, product.info.name]);
       }
     setList(items)
 
    })
  }

  const getMovie = (id) =>{
    console.log(id);
    let movie = listInfo.filter(x=>x.id === id )[0];
    setChoosen(movie);
    console.log(movie);
    setEdit(true);
    // console.log(movie.seasons.split(new RegExp("(?<=}),")))
    if(movie.seasons)
    {
      let seasons = movie.seasons.split(new RegExp("(?<=}),"));
      let list = []
      for (let season of seasons){
        list.push(season);
      } 
      setSeasons(list);
      
    }
    if(movie.crew)
    {
      let crews = movie.crew.split(new RegExp("(?<=}),"));
      let list = []
      for (let cast of crews){
        list.push(cast);
      } 
      setCrew(list);

    }
    
  }




  const changeInput = (field, value,info,idx) => {
    let form = JSON.parse(JSON.stringify(choosen));
    switch (info) {
      case 1:
        {
          let item = form.info;
          item[field] = value;
          form.info = item;
          break;
        }
      case 2: 
      {
        let sl = seasonList;
        sl[idx][field] = value
        setSeasons(sl);
        break;
      }
      case 3: 
      {
        let sl = crew;
        sl[idx][field] = value
        setCrew(sl);
        break;
      }
      default:
        {
          form[field] = value;
          break;
        }
    }
    console.log(form)
    setChoosen(form);
  }

  const removeItem = (idx) => {
    let itemList =seasonList;
    itemList.splice(idx,1)
    setSeasons(itemList)
  }

  // const removeCast = (idx) => {
  //   let itemList = seasonList;
  //   itemList.splice(idx,1)
  //   setSeasons(itemList)
  // }



  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Films&apos; table info</h4>
            <input onChange={(e)=>setSearch(e.target.value)}/>
            <Button color="white" aria-label="edit" justIcon round>
          <Search />
        </Button>
        <RegularButton color="danger" onClick={()=>{setEdit(false)}}><Add/>  Add new </RegularButton>
          </CardHeader>
          <CardBody>

      <Table className={classes.table}>
        
          <TableHead className={classes["primary TableHeader"]}>
            <TableRow className={classes.tableHeadRow} >
              {["id", "type", "name"].map((prop, key) => {
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
          <h4 className={classes.cardTitleWhite}>Film&apos;s info</h4>
          
          <RegularButton color="danger" onClick={()=>submitForm()}>{edit ? 'Edit' : 'Add'}</RegularButton>
        </CardHeader>
        <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
          <img src={ choosen.info && choosen.info.poster ? choosen.info.poster :  
          'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png'
            } className={classes.moviePoster} />
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
          <h4>Film&apos;s info</h4>   
          <GridContainer>
          <form action="" id='type' className="contact-form">
          <GridItem xs={12} sm={12} md={12}>
            <label>Product type:
            
            <select name="type" value={choosen.type} onChange={(e)=>changeInput('type', e.target.value)}>
              <option value='movie' >Movie</option>
              <option value='tv'>Tv show</option>
            </select>
            </label>

          </GridItem>
          </form>
          </GridContainer>
          <form action="" id={`score`} className="contact-form" >

            <GridContainer >
              <GridItem xs={6} sm={6} md={6}>
              <label>
              <input placeholder="user_score" name='user_score' type="number"  value = {choosen.user_score || '' } onChange={(e)=>changeInput('user_score', e.target.value,4)}  />
              <span>user score</span>
              </label>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
              <label>
              <input placeholder="lemon_score" name='lemon_score' type="number"  value = {choosen.lemon_score || '' } onChange={(e)=>changeInput('lemon_score', e.target.value,4)}  />
              <span>lemon score</span>
              </label>
              </GridItem>

            </GridContainer>
            
          </form>

          <form action="" id='info' className="contact-form">
          <GridContainer>
          <GridItem xs={12} sm={6} md={6}>

                  <label>
                  <input name="name" type="text" placeholder="Name" value={choosen.info.name || '' } onChange={(e)=>changeInput('name', e.target.value,1)}/>
                  <span>Name</span>
                  </label>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input name="originalLanguage" placeholder="originalLanguage" type="text" value = {choosen.info.originalLanguage || '' } onChange={(e)=>changeInput('originalLanguage', e.target.value,1)}/>
                  <span>originalLanguage:</span>
                  </label>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input name="streamingDate" placeholder="streamingDate" type="text" value = {choosen.info.streamingDate || '' } onChange={(e)=>changeInput('streamingDate', e.target.value,1)}/>
                  <span>streamingDate:</span>
                  </label>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input name="productions" placeholder="productions" type="text" value = {choosen.info.productions || '' } onChange={(e)=>changeInput('productions', e.target.value,1)}/>
                  <span>productions</span>
                  </label>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input name="soundMixs" placeholder="soundMixs" type="text" value = {choosen.info.soundMixs || '' } onChange={(e)=>changeInput('soundMixs', e.target.value,1)}/>
                  <span>soundMixs</span>
                  </label>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input name="aspectRatio" placeholder="aspectRatio" type="text" value = {choosen.info.aspectRatio || '' } onChange={(e)=>changeInput('aspectRatio', e.target.value,1)}/>
                  <span>aspectRatio</span>
                  </label>
                  </GridItem>

                  <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input placeholder="network" name='network' type="text"  value = {choosen.info.network || '' } onChange={(e)=>changeInput('network', e.target.value,1)}/>
                  <span>network</span>
                  </label>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input placeholder="starting" name='starting' type="text"  value = {choosen.info.starting || '' } onChange={(e)=>changeInput('starting', e.target.value,1)}/>
                  <span>starting</span>
                  </label>
                  </GridItem>
                  <GridItem xs={12} sm={6} md={6}>
                  <label>
                  <input placeholder="Summary" type="file" multiple accept="image/*" onChange={(e)=>{setImages(e.target.value) }}/>
                  <span>Images</span>
                  </label>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={12}>
                  <label>
                  <textarea name="summary" placeholder="Summary" type="text" value={choosen.info.summary || ''} onChange={(e)=>changeInput('summary', e.target.value,1)}/>
                  <span>Summary</span>
                  </label>
                  </GridItem>
          </GridContainer>
          </form>

          <div className='overflow-container'>

                <GridItem xs={12} sm={12} md={12}>
                <h4> Images </h4>
                  <GridContainer>
                  {
                  choosen.photos?.map((el,idx) => {
                    return(
                      el && el !== '' ? 
                      <GridItem xs={3} sm={3} md={3} key={idx}>
                      <img src={el} className={classes.moviePoster} />
                      </GridItem> : null 

                    )
                  }) 
                  }
                  </GridContainer>

                </GridItem>


                </div> 

         {
           choosen.type?.toLowerCase() === 'tv' ?
            <GridContainer>

          <GridItem xs={12} sm={12} md={12} >
            <div className='overflow-container'>
            <h4>Season&apos;s info (optional)</h4>   
            {
                seasonList.map((el, idx)=>{
                  return (
                    <form action="" id={`season${idx + 1}`} className="contact-form" key={idx}>
                      <div>
                       <span> Season number: {idx + 1} <span className='remove' onClick={()=>removeItem(idx)}> X Remove</span> </span> 

                      </div>

                    <GridContainer >
                      <GridItem xs={4} sm={4} md={4}>
                      <label>
                      <input placeholder="seasons name" name='season_name' type="text"  value = {el.season_name || '' } onChange={(e)=>changeInput('season_name', e.target.value,2,idx)}  />
                      <span>starting</span>
                      </label>
                      </GridItem>
                      <GridItem xs={4} sm={4} md={4}>
                      <label>
                      <input placeholder="summary" name='summary' type="text"  value = {el.summary || '' } onChange={(e)=>changeInput('summary', e.target.value,2,idx)} />
                      <span>Summary</span>
                      </label>
                      </GridItem>
                      <GridItem xs={4} sm={4} md={4}>
                      <label>
                      <input placeholder="starting" name='starting' type="text"  value = {el.starting || '' } onChange={(e)=>changeInput('starting', e.target.value,2,idx)} />
                      <span>Starting</span>
                      </label>
                      </GridItem>

                    </GridContainer>
                  </form>
                  )

                })
            }
            </div>

            <button onClick={()=>{
              let list = JSON.parse(JSON.stringify(seasonList))
              list.push(season);
              setSeasons(list);
            }}> New Seasons</button>

          </GridItem>
          </GridContainer> : null
         }
         <h2> Reviews</h2>
         <h3>Critic</h3>
         <div className="overflow-container">
         {
           choosen.data?.reviews ? 
           choosen.data?.reviews.critics.map((el, idx)=>{
            return (
              <form action="" id={`crew${idx + 1}`} className="contact-form card " key={idx}>

                <div>
                  <span className='remove' > X Remove</span>
                  {/* onClick={()=>removeCast(idx)} */}
                </div>

              <GridContainer >
                <GridItem xs={6} sm={6} md={6}>
                <img src={el.image} alt="Avatar" className="avatar"/>
                <span className="name">{el.name}</span>

                </GridItem>
                <GridItem xs={6} sm={6} md={6}>

                <span>{el.content}</span>

                </GridItem>
                <GridItem xs={6} sm={6} md={6}>

                <span>{el.score}</span>

                </GridItem>
                <GridItem xs={6} sm={6} md={6}>

                <small>{el.date}</small>

                </GridItem>
              </GridContainer>
            </form>
            )

          })
           : null         
          }
         </div>
         <h3>Top critic</h3>
         <div className="overflow-container">

         {
           choosen.data?.reviews ? 
           choosen.data?.reviews.top_critics.map((el, idx)=>{
            return (
              <form action="" id={`crew${idx + 1}`} className="contact-form card " key={idx}>

                <div>
                  <span className='remove' > X Remove</span>
                  {/* onClick={()=>removeCast(idx)} */}
                </div>

              <GridContainer >
                <GridItem xs={6} sm={6} md={6}>
                <img src={el.image} alt="Avatar" className="avatar"/>
                <span className="name">{el.name}</span>

                </GridItem>
                <GridItem xs={6} sm={6} md={6}>

                <span>{el.content}</span>

                </GridItem>
                <GridItem xs={6} sm={6} md={6}>

                <span>{el.score}</span>

                </GridItem>
                <GridItem xs={6} sm={6} md={6}>

                <small>{el.date}</small>

                </GridItem>
              </GridContainer>
            </form>
            )

          })
           : null         
          }
         </div>
          </GridItem>
        </GridContainer>
        </CardBody>

        </Card>

      </GridItem>
    </GridContainer>
  );
}
