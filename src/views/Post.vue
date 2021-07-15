<template>
  <div>
    <loading v-if="isLoading"></loading>
    <div v-else>
      <!-- HEADER -->
      <navbar
        style="z-index:9999"
        id="myHeader"
        class="navbar container"
      ></navbar>
      <v-card
        tile
        outlined
        elevation="0"
        class="container body-container row-style"
        style="display:block;"
      >
        <div
          style="padding-top:4px;display:flex;align-items:center;z-index:1000;max-height:20px;position:absolute;height:20px;width:100%;background-color:black;opacity:0.6;color:white"
        >
          <span style="color: #F6DC24;margin-left:10px"
            ><strong>TRENDING ON LC</strong></span
          >
          <b-link class="trending-link" style="margin-left:10px"
            >Eternals Trailer
          </b-link>
          <b-link class="trending-link" style="margin-left:10px"
            >Disney Animation Showdown
          </b-link>

          <b-link class="trending-link" style="margin-left:10px"
            >TV Premiere Dates
          </b-link>
          <b-link class="trending-link" style="margin-left:10px"
            >The Lemoncat Channel
          </b-link>
          <b-link
            style="text-decoration:none;margin-left: auto;margin-right:10px"
          >
            <v-icon dense small style="color:white;">
              mdi-facebook
            </v-icon>
          </b-link>
          <b-link
            style="text-decoration:none;margin-left: 10px;margin-right:10px"
          >
            <v-icon dense small style="color:white;">
              mdi-snapchat
            </v-icon>
          </b-link>
          <b-link
            style="text-decoration:none;margin-left: 10px;margin-right:10px"
          >
            <v-icon dense small style="color:white;">
              mdi-instagram
            </v-icon>
          </b-link>
          <b-link
            style="text-decoration:none;margin-left: 10px;margin-right:10px"
          >
            <v-icon dense small style="color:white;">
              mdi-twitter
            </v-icon>
          </b-link>
          <b-link
            style="text-decoration:none;margin-left: 10px;margin-right:10px"
          >
            <v-icon dense small style="color:white;">
              mdi-youtube
            </v-icon>
          </b-link>
        </div>
      </v-card>
      <!-- BODY -->
      <v-card
        tile
        outlined
        elevation="0"
        class="container body-container row-style"
      >
        <b-row style="padding-top:50px">
          <b-col cols="9">
            <h2>
              <strong>{{ post.title.toUpperCase() }}</strong>
            </h2>
            <h5>
              {{ post.sideTitle.toUpperCase() }}
            </h5>
            <div>
              <span>by </span>
              <b-link
                :href="'/user/' + post.user.slug"
                style="text-decoration:none;"
                >{{ post.user.name }}
              </b-link>
              <span style="color:gray"> | {{ post.updatedAt }}</span>
              <b-link href="#comment" style="text-decoration:none;">
                | <v-icon small>mdi-message</v-icon> Comments</b-link
              >
            </div>
            <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
            <p style="padding:20px"><span v-html="post.content"></span></p>
            <div v-if="user.id != ''" style="width:100%">
              <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
              <div
                id="comment"
                style="width: 90%;margin-left: auto;margin-right: auto;padding-bottom:20px"
              >
                <div style="float:left">
                  <div style="display: flex;" v-b-modal="'modal'">
                    <div style="margin-right:10px">
                      <img
                        v-for="item of post.topInteracts"
                        :key="item"
                        :src="item"
                        style="height:20px;width:20px"
                      />
                    </div>
                    <div>
                      <b-link style="text-decoration:none;color:gray">{{
                        post.interacts.length
                      }}</b-link>
                    </div>
                  </div>
                </div>

                <div style="float:right">
                  <b-link style="text-decoration:none;color:gray"
                    >{{ post.totalComments }} Comments</b-link
                  >
                </div>
              </div>
              <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
              <div style="width:90%;margin-left: auto;margin-right: auto;">
                <b-row>
                  <b-col
                    ><b-button class="block" id="popover-react"
                      ><span style="display:flex;justify-content: center">
                        <span
                          v-if="post.ownerInteract"
                          :style="
                            'display:flex;align-items: center;justify-content: center;color:' +
                              post.ownerInteract.color
                          "
                        >
                          <img
                            :src="post.ownerInteract.image"
                            style="width:25px;height:25px;margin-right:5px"
                          />
                          <strong>{{ post.ownerInteract.emoji }}</strong>
                        </span>
                        <span v-else>
                          <v-icon style="margin-right:5px"
                            >mdi-thumb-up-outline</v-icon
                          >
                          <strong>React</strong>
                        </span>
                      </span></b-button
                    ><b-popover
                      target="popover-react"
                      triggers="hover"
                      placement="top"
                      delay="100"
                    >
                      <img
                        class="react-icon"
                        src="../icons/emoji/love.svg"
                        @click="
                          createAction('interact', 'post', post.id, 'love')
                        "
                      />
                      <img
                        src="../icons/emoji/care.svg"
                        class="react-icon"
                        @click="
                          createAction('interact', 'post', post.id, 'care')
                        "
                      />
                      <img
                        src="../icons/emoji/wow.svg"
                        class="react-icon"
                        @click="
                          createAction('interact', 'post', post.id, 'wow')
                        "
                      />
                      <img
                        src="../icons/emoji/like.svg"
                        class="react-icon"
                        @click="
                          createAction('interact', 'post', post.id, 'like')
                        "
                      />
                      <img
                        src="../icons/emoji/dislike.png"
                        class="react-icon"
                        @click="
                          createAction('interact', 'post', post.id, 'dislike')
                        "
                      />
                      <img
                        src="../icons/emoji/angry.svg"
                        class="react-icon"
                        @click="
                          createAction('interact', 'post', post.id, 'angry')
                        "
                      /> </b-popover
                  ></b-col>
                  <b-col
                    ><b-button class="block"
                      ><span style="display:flex;justify-content: center">
                        <v-icon style="margin-right:5px"
                          >mdi-comment-processing-outline</v-icon
                        >
                        <strong>Comment</strong></span
                      ></b-button
                    ></b-col
                  >
                  <b-col
                    ><b-button class="block" :pressed="false"
                      ><span style="display:flex;justify-content: center">
                        <v-icon style="margin-right:5px"
                          >mdi-share-outline</v-icon
                        >
                        <strong>Share</strong></span
                      ></b-button
                    ></b-col
                  >
                </b-row>
              </div>
              <hr style="width: 90%;margin-left: auto;margin-right: auto;" />
              <div
                style="width: 90%;margin-left: auto;margin-right: auto;padding-bottom:20px"
              >
                <div style="width:100%;display:flex;align-items: center;">
                  <img
                    :src="user.image"
                    style="height:35px;width:35px;float:left;margin-right:10px;border-radius: 50%"
                  />
                  <b-form-input
                    v-model="post.replyContent"
                    style="border-radius: 30px !important;float:left;max-width:70%;margin-right:36px;background-color: #F0F2F5"
                    placeholder="Write your comment"
                    @keyup.enter="
                      if (post.replyContent.length)
                        createAction(
                          'comment',
                          'post',
                          post.id,
                          post.replyContent
                        );
                    "
                  />
                  <v-select
                    style="max-width:20%;float:right"
                    v-model="selected"
                    :items="['Top', 'Time']"
                    label="View Mode"
                  ></v-select>
                </div>
                <div>
                  <!-- Comments -->
                  <b-row v-for="item of post.comments" :key="item.id">
                    <b-col
                      v-if="item.show === true"
                      style="margin-left:0px!important"
                      class="no-gutters"
                      cols="1"
                      ><img
                        :src="item.user.image"
                        style="height:35px;width:35px;float:left;border-radius: 50%"
                    /></b-col>
                    <b-col
                      v-if="item.show === true"
                      class="no-gutters"
                      cols="11"
                      style="display:flex;flex-direction:column"
                    >
                      <div
                        style="margin-bottom:5px;border-radius: 10px !important;float:left;background-color: #F0F2F5;display:flex;flex-direction: column;padding:10px;max-width:550px"
                      >
                        <b-link
                          :href="'/user/' + item.user.slug"
                          style="float:left;margin-right:auto;text-decoration:none;"
                          ><strong
                            >{{ item.user.name }}
                            <span v-if="item.user.role === 's-user'">
                              <v-icon style="color:red">mdi-star</v-icon>
                              <i style="color:red"
                                >Working for {{ item.user.data.working }}</i
                              >
                            </span>
                          </strong></b-link
                        >

                        <span
                          style="float:left;margin-right:auto;text-align: justify"
                          >{{ item.content }}</span
                        >
                      </div>
                      <div style="padding-left:10px">
                        <b-link
                          style="text-decoration:none;color:gray;float:left;font-size:12px"
                          :id="'popover-id-' + item.id"
                        >
                          <strong
                            v-if="item.ownerInteract"
                            :style="'color:' + item.ownerInteract.color"
                            >{{ item.ownerInteract.emoji }}</strong
                          >
                          <strong v-else>React</strong>
                        </b-link>
                        <strong style="float:left; color:gray"
                          >&nbsp;·&nbsp;</strong
                        ><b-link
                          @click="showReply(item.id, '@' + item.user.name)"
                          style="text-decoration:none;color:gray;float:left;font-size:12px"
                          ><strong>Reply</strong></b-link
                        ><strong style="float:left;color:gray"
                          >&nbsp;·&nbsp;</strong
                        ><b-link
                          style="text-decoration:none;color:gray;float:left;font-size:12px"
                          ><strong>{{ item.fromNow }}</strong></b-link
                        >
                        <b-link
                          v-if="item.interacts.length"
                          v-b-modal="'modal-comment-' + item.id"
                          style="float:right;text-decoration:none;color:gray;"
                          ><img
                            v-for="interactItem of item.topInteracts"
                            :key="interactItem"
                            :src="interactItem"
                            style="height:15px;width:14px"
                          />
                          <span>{{ item.interacts.length }}</span>
                        </b-link>
                        <b-popover
                          :target="'popover-id-' + item.id"
                          triggers="hover"
                          placement="top"
                          delay="100"
                        >
                          <img
                            src="../icons/emoji/love.svg"
                            class="react-icon"
                            @click="
                              createAction(
                                'interact',
                                'comment',
                                item.id,
                                'love'
                              )
                            "
                          />
                          <img
                            src="../icons/emoji/care.svg"
                            class="react-icon"
                            @click="
                              createAction(
                                'interact',
                                'comment',
                                item.id,
                                'care'
                              )
                            "
                          />
                          <img
                            src="../icons/emoji/wow.svg"
                            class="react-icon"
                            @click="
                              createAction(
                                'interact',
                                'comment',
                                item.id,
                                'wow'
                              )
                            "
                          />
                          <img
                            src="../icons/emoji/like.svg"
                            class="react-icon"
                            @click="
                              createAction(
                                'interact',
                                'comment',
                                item.id,
                                'like'
                              )
                            "
                          />
                          <img
                            src="../icons/emoji/dislike.png"
                            class="react-icon"
                            @click="
                              createAction(
                                'interact',
                                'comment',
                                item.id,
                                'dislike'
                              )
                            "
                          />
                          <img
                            src="../icons/emoji/angry.svg"
                            class="react-icon"
                            @click="
                              createAction(
                                'interact',
                                'comment',
                                item.id,
                                'angry'
                              )
                            "
                          />
                        </b-popover>
                      </div>
                      <!-- Child comments -->
                      <div>
                        <div style="margin-top:7px">
                          <b-row
                            v-for="child of item.childComments"
                            :key="child.id"
                          >
                            <!-- Child modal -->
                            <b-modal
                              size="md"
                              hide-footer
                              hide-header
                              :id="'modal-comment-child-' + child.id"
                              centered
                            >
                              <v-tabs>
                                <v-tabs-slider color="green"></v-tabs-slider>

                                <v-tab
                                  v-for="detailInteract in child.detailInteracts"
                                  :key="detailInteract.emoji"
                                >
                                  <div
                                    style="display:flex;justify-content:center; align-items: center;"
                                  >
                                    <img
                                      :src="detailInteract.image"
                                      style="height:25px;width:25px;margin-right:8px"
                                    />
                                    <strong
                                      :style="
                                        'font-size: 18px;color:' +
                                          detailInteract.color
                                      "
                                    >
                                      {{ detailInteract.data.length }}
                                    </strong>
                                  </div>
                                </v-tab>
                                <v-tab-item
                                  style="margin-top: 10px"
                                  v-for="detailInteract in child.detailInteracts"
                                  :key="detailInteract.emoji"
                                >
                                  <b-link
                                    v-for="user in detailInteract.data"
                                    :key="user.id"
                                    :href="'/user/' + user.slug"
                                    style="display:flex;align-items: center;text-decoration: none;margin-bottom: 5px"
                                  >
                                    <img
                                      :src="user.image"
                                      style="width:40px;height:40px;border-radius:50%;margin-right:10px"
                                    />
                                    <strong style="font-size: 17px;"
                                      >{{ user.name }}
                                      <span v-if="user.role === 's-user'">
                                        <v-icon style="color:red"
                                          >mdi-star</v-icon
                                        >
                                        <i style="color:red"
                                          >Working for
                                          {{ user.data.working }}</i
                                        >
                                      </span></strong
                                    >
                                  </b-link>
                                </v-tab-item>
                              </v-tabs>
                            </b-modal>
                            <b-col
                              v-if="child.show === true"
                              style="margin-left:0px!important"
                              class="no-gutters"
                              cols="1"
                              ><img
                                :src="child.user.image"
                                style="height:25px;width:25px;float:left;border-radius: 50%"
                            /></b-col>
                            <b-col
                              v-if="child.show === true"
                              class="no-gutters"
                              cols="11"
                            >
                              <div
                                style="margin-bottom:5px;border-radius: 10px !important;float:left;background-color: #F0F2F5;display:flex;flex-direction: column;padding:10px;max-width: 513px;min-width: 250px"
                              >
                                <b-link
                                  style="float:left;margin-right:auto;text-decoration:none;"
                                  ><strong>{{ child.user.name }}</strong>
                                </b-link>
                                <span
                                  style="text-align:justify;over-flow:hidden"
                                  >{{ child.content }}</span
                                >
                              </div>
                              <div style="margin-left:10px">
                                <b-link
                                  style="text-decoration:none;color:gray;float:left;font-size:12px"
                                  :id="'popover-id-' + child.id"
                                >
                                  <strong
                                    v-if="child.ownerInteract"
                                    :style="
                                      'color:' + child.ownerInteract.color
                                    "
                                    >{{ child.ownerInteract.emoji }}</strong
                                  >
                                  <strong v-else>React</strong>
                                </b-link>
                                <strong style="float:left; color:gray"
                                  >&nbsp;·&nbsp;</strong
                                ><b-link
                                  @click="
                                    showReply(item.id, '@' + child.user.name)
                                  "
                                  style="text-decoration:none;color:gray;float:left;font-size:12px"
                                  ><strong>Reply</strong></b-link
                                ><strong style="float:left;color:gray"
                                  >&nbsp;·&nbsp;</strong
                                ><b-link
                                  style="text-decoration:none;color:gray;float:left;font-size:12px"
                                  ><strong>{{ child.fromNow }}</strong></b-link
                                >
                                <b-link
                                  v-b-modal="'modal-comment-child-' + child.id"
                                  v-if="child.interacts.length"
                                  style="float:right;text-decoration:none;color:gray;"
                                  ><img
                                    v-for="interactItem of child.topInteracts"
                                    :key="interactItem"
                                    :src="interactItem"
                                    style="height:15px;width:14px"
                                  />
                                  <span>{{ child.interacts.length }}</span>
                                </b-link>
                                <b-popover
                                  :target="'popover-id-' + child.id"
                                  triggers="hover"
                                  placement="top"
                                  delay="100"
                                >
                                  <img
                                    class="react-icon"
                                    src="../icons/emoji/love.svg"
                                    @click="
                                      createAction(
                                        'interact',
                                        'comment',
                                        child.id,
                                        'love'
                                      )
                                    "
                                  />
                                  <img
                                    src="../icons/emoji/care.svg"
                                    class="react-icon"
                                    @click="
                                      createAction(
                                        'interact',
                                        'comment',
                                        child.id,
                                        'care'
                                      )
                                    "
                                  />
                                  <img
                                    src="../icons/emoji/wow.svg"
                                    class="react-icon"
                                    @click="
                                      createAction(
                                        'interact',
                                        'comment',
                                        child.id,
                                        'wow'
                                      )
                                    "
                                  />
                                  <img
                                    src="../icons/emoji/like.svg"
                                    class="react-icon"
                                    @click="
                                      createAction(
                                        'interact',
                                        'comment',
                                        child.id,
                                        'like'
                                      )
                                    "
                                  />
                                  <img
                                    src="../icons/emoji/dislike.png"
                                    class="react-icon"
                                    @click="
                                      createAction(
                                        'interact',
                                        'comment',
                                        child.id,
                                        'dislike'
                                      )
                                    "
                                  />
                                  <img
                                    src="../icons/emoji/angry.svg"
                                    class="react-icon"
                                    @click="
                                      createAction(
                                        'interact',
                                        'comment',
                                        child.id,
                                        'angry'
                                      )
                                    "
                                  />
                                </b-popover>
                              </div>
                            </b-col>
                          </b-row>
                        </div>
                        <!-- Reply -->
                        <div
                          v-if="item.reply"
                          style="width:100%;display:flex;align-items: center;margin-bottom: 10px"
                        >
                          <img
                            :src="user.image"
                            style="height:25px;width:25px;float:left;margin-right:10px;border-radius: 50%"
                          />
                          <b-form-input
                            v-model="item.replyContent"
                            style="border-radius: 30px !important;float:left;background-color: #F0F2F5"
                            placeholder="Write your comment"
                            @keyup.enter="
                              if (item.replyContent.length)
                                createAction(
                                  'comment',
                                  'comment',
                                  item.id,
                                  item.replyContent
                                );
                            "
                          />
                        </div>
                        <!-- Show more -->
                        <div
                          v-if="item.showAllChilds === false"
                          style="margin:10px;float:left"
                          @click="showAllChilds(item.id)"
                        >
                          <v-icon small>mdi-subdirectory-arrow-right</v-icon>
                          <b-link style="text-decoration:none;color:gray"
                            ><strong>
                              Show more
                              {{ item.childComments.length - 3 }}
                              comments</strong
                            ></b-link
                          >
                        </div>
                        <!-- Comment Modal -->
                        <b-modal
                          size="md"
                          hide-footer
                          hide-header
                          :id="'modal-comment-' + item.id"
                          centered
                        >
                          <v-tabs>
                            <v-tabs-slider color="green"></v-tabs-slider>

                            <v-tab
                              v-for="detailInteract in item.detailInteracts"
                              :key="detailInteract.emoji"
                            >
                              <div
                                style="display:flex;justify-content:center; align-items: center;"
                              >
                                <img
                                  :src="detailInteract.image"
                                  style="height:25px;width:25px;margin-right:8px"
                                />
                                <strong
                                  :style="
                                    'font-size: 18px;color:' +
                                      detailInteract.color
                                  "
                                >
                                  {{ detailInteract.data.length }}
                                </strong>
                              </div>
                            </v-tab>
                            <v-tab-item
                              style="margin-top: 10px"
                              v-for="detailInteract in item.detailInteracts"
                              :key="detailInteract.emoji"
                            >
                              <b-link
                                v-for="user in detailInteract.data"
                                :key="user.id"
                                :href="'/user/' + user.slug"
                                style="display:flex;align-items: center;text-decoration: none;margin-bottom: 5px"
                              >
                                <img
                                  :src="user.image"
                                  style="width:40px;height:40px;border-radius:50%;margin-right:10px"
                                />
                                <strong style="font-size: 17px;"
                                  >{{ user.name }}
                                  <span v-if="user.role === 's-user'">
                                    <v-icon style="color:red">mdi-star</v-icon>
                                    <i style="color:red"
                                      >Working for {{ user.data.working }}</i
                                    >
                                  </span></strong
                                >
                              </b-link>
                            </v-tab-item>
                          </v-tabs>
                        </b-modal>
                      </div>
                    </b-col>
                  </b-row>
                  <!-- Parent show more -->
                  <div
                    v-if="post.showAllChilds === false"
                    style="margin:10px;float:left"
                    @click="showAllChilds('post')"
                  >
                    <v-icon small>mdi-subdirectory-arrow-right</v-icon>
                    <b-link style="text-decoration:none;color:gray"
                      ><strong>
                        Show more
                        {{ post.comments.length - 3 }} comments</strong
                      ></b-link
                    >
                  </div>
                  <!-- Post Modal -->
                  <b-modal
                    size="md"
                    hide-footer
                    hide-header
                    id="modal"
                    centered
                  >
                    <v-tabs>
                      <v-tabs-slider color="green"></v-tabs-slider>

                      <v-tab
                        v-for="item in post.detailInteracts"
                        :key="item.emoji"
                      >
                        <div
                          style="display:flex;justify-content:center; align-items: center;"
                        >
                          <img
                            :src="item.image"
                            style="height:25px;width:25px;margin-right:8px"
                          />
                          <strong
                            :style="'font-size: 18px;color:' + item.color"
                          >
                            {{ item.data.length }}
                          </strong>
                        </div>
                      </v-tab>
                      <v-tab-item
                        style="margin-top: 10px"
                        v-for="item in post.detailInteracts"
                        :key="item.emoji"
                      >
                        <b-link
                          v-for="user in item.data"
                          :key="user.id"
                          :href="'/user/' + user.slug"
                          style="display:flex;align-items: center;text-decoration: none;"
                        >
                          <img
                            :src="user.image"
                            style="width:40px;height:40px;border-radius:50%;margin-right:10px"
                          />
                          <strong style="font-size: 17px;"
                            >{{ user.name }}
                            <span v-if="user.role === 's-user'">
                              <v-icon style="color:red">mdi-star</v-icon>
                              <i style="color:red"
                                >Working for {{ user.data.working }}</i
                              >
                            </span></strong
                          >
                        </b-link>
                      </v-tab-item>
                    </v-tabs>
                  </b-modal>
                </div>
              </div>
              <div
                style="width: 90%;margin-left: auto;margin-right: auto;padding-bottom:20px"
              ></div>
            </div>
          </b-col>
          <b-col cols="3">
            <div>
              <header-bar>
                <span slot="header">FRESH NEWS IN WEEK</span>
              </header-bar>
              <news-card></news-card>
            </div>
          </b-col>
        </b-row>
      </v-card>
      <!-- FOOTER -->
      <v-card
        tile
        outlined
        elevation="0"
        class="container body-container row-style"
        style="display:block;"
      >
        <page-footer />
      </v-card>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import getPostBySlug from "@/apollo/queries/getPostBySlug.gql";
import createAction from "@/apollo/mutations/createAction.gql";
import Navbar from "@/components/Navbar";
import PageFooter from "@/components/Footer";
import HeaderBar from "@/components/Movie/HeaderBar";
import NewsCard from "@/components/SideBestNewsWeek";
import Loading from "@/components/Loading";
export default {
  components: {
    Navbar,
    PageFooter,
    HeaderBar,
    NewsCard,
    Loading
  },
  data() {
    return {
      post: {},
      isLoading: true,
      slug: "",
      selected: "Top",
      basePost: {}
    };
  },
  created() {
    this.slug = this.$route.params.slug;
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  watch: {
    selected(val, old) {
      const temp = JSON.parse(JSON.stringify(this.post));
      this.post = JSON.parse(JSON.stringify(this.basePost));
      this.basePost = temp;
    }
  },
  methods: {
    showReply(id, content) {
      const data = JSON.parse(JSON.stringify(this.post));
      const index = _.findIndex(data.comments, ["id", id]);
      data.comments[index].reply = true;
      data.comments[index].replyContent = content + " ";
      this.post = data;
    },
    showAllChilds(parent) {
      const data = JSON.parse(JSON.stringify(this.post));
      if (parent === "post") {
        data.showAllChilds = true;
        for (const item of data.comments) {
          item.show = true;
        }
      } else {
        const index = _.findIndex(data.comments, ["id", parent]);
        data.comments[index].showAllChilds = true;
        for (const item of data.comments[index].childComments) {
          item.show = true;
        }
      }
      this.post = data;
    },
    createAction(type, parentType, parent, data) {
      if (type === "interact") {
        const interact = {
          user: {
            name: this.user.name,
            slug: this.user.slug,
            image: this.user.image,
            role: this.user.role,
            data: this.user.data
          },
          emoji: data,
          score: this.user.role === "s-user" ? 100 : 1
        };
        console.log("🚀 -------------------------------------");
        console.log("🚀 ~ createAction ~ interact", interact);
        console.log("🚀 -------------------------------------");
      }
      console.log(type, parentType, parent, data);
    }
  },
  apollo: {
    postBySlug: {
      query: getPostBySlug,
      variables() {
        return {
          slug: this.slug
        };
      },
      result(result) {
        this.post = result.data.postBySlug;
        this.post.updatedAt = moment(this.post.updatedAt).format("LL");
        const topEmoji = interacts => {
          const allEmoji = _.uniqBy(interacts.map(item => item.emoji)).map(
            item => {
              let count = interacts.filter(item => item.emoji === item).length;
              return {
                data: item,
                count
              };
            }
          );
          const topEmoji = _.sortBy(allEmoji, ["count"])
            .reverse()
            .splice(0, 3);
          const results = [];
          for (const { data } of topEmoji) {
            switch (data) {
              case "love":
                results.push(require("../icons/emoji/love.svg"));
                break;
              case "care":
                results.push(require("../icons/emoji/care.svg"));
                break;
              case "wow":
                results.push(require("../icons/emoji/wow.svg"));
                break;
              case "like":
                results.push(require("../icons/emoji/like.svg"));
                break;
              case "dislike":
                results.push(require("../icons/emoji/dislike.png"));
                break;
              case "angry":
                results.push(require("../icons/emoji/angry.svg"));
                break;
            }
          }
          return results;
        };
        const totalComments = comments => {
          let results = comments.length;
          for (const item of comments) {
            if (item.childComments) results += item.childComments.length || 0;
          }
          return results;
        };
        const interactsDetail = [
          {
            emoji: "love",
            color: "#ED2E4E",
            image: require("../icons/emoji/love.svg"),
            data: []
          },
          {
            emoji: "care",
            color: "#F7B126",
            image: require("../icons/emoji/care.svg"),
            data: []
          },
          {
            emoji: "wow",
            color: "#F7B126",
            image: require("../icons/emoji/wow.svg"),
            data: []
          },
          {
            emoji: "like",
            color: "#1D69F8",
            image: require("../icons/emoji/like.svg"),
            data: []
          },
          {
            emoji: "dislike",
            color: "red",
            image: require("../icons/emoji/dislike.png"),
            data: []
          },
          {
            emoji: "angry",
            color: "#E85E07",
            image: require("../icons/emoji/angry.svg"),
            data: []
          }
        ];
        const createDetailInteracts = interacts => {
          const results = JSON.parse(JSON.stringify(interactsDetail));
          for (const item of interacts) {
            switch (item.emoji) {
              case "love":
                results[0].data.push(item.user);
                break;
              case "care":
                results[1].data.push(item.user);
                break;
              case "wow":
                results[2].data.push(item.user);
                break;
              case "like":
                results[3].data.push(item.user);
                break;
              case "dislike":
                results[4].data.push(item.user);
                break;
              case "angry":
                results[5].data.push(item.user);
                break;
              default:
                break;
            }
          }
          const final = [];
          for (const item of results) {
            if (item.data.length) final.push(item);
          }
          for (const item of final) {
            if (item.data.length) {
              item.data = _.sortBy(item.data, ["role"]);
            }
          }
          return final;
        };
        const mapComments = (comments, isChild = false) => {
          return comments.map(item => {
            if (!isChild) {
              item.showAllChilds = true;
              if (item.childComments.length > 3) item.showAllChilds = false;
            }
            item.show = true;
            const index = _.findIndex(comments, ["id", item.id]);
            if (index > 2) item.show = false;
            item.reply = false;
            item.replyContent = "";
            item.score = parseFloat(item.score);
            item.detailInteracts = createDetailInteracts(item.interacts);
            item.fromNow = moment(item.updatedAt).fromNow();
            item.content = item.content.replace(
              /[`~!#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,
              " "
            );
            item.topInteracts = topEmoji(item.interacts);
            const ownerInteract = _.find(item.interacts, [
              "user.id",
              this.user.id
            ]);
            if (ownerInteract) {
              let userInteract = {};
              switch (ownerInteract.emoji) {
                case "love":
                  userInteract = {
                    color: "#ED2E4E",
                    emoji: "Love"
                  };
                  break;
                case "care":
                  userInteract = {
                    color: "#F7B126",
                    emoji: "Care"
                  };
                  break;
                case "wow":
                  userInteract = {
                    color: "#F7B126",
                    emoji: "Wow"
                  };
                  break;
                case "like":
                  userInteract = {
                    color: "#1D69F8",
                    emoji: "Like"
                  };
                  break;
                case "dislike":
                  userInteract = {
                    color: "red",
                    emoji: "Dislike"
                  };
                  break;
                case "angry":
                  userInteract = {
                    color: "#E85E07",
                    emoji: "Angry"
                  };
                  break;
              }
              item.ownerInteract = userInteract;
            }
            return item;
          });
        };
        const sortComments = comments => {
          return _.sortBy(comments, ["score"]).reverse();
        };
        const ownerInteract = _.find(this.post.interacts, [
          "user.id",
          this.user.id
        ]);
        if (ownerInteract) {
          let userInteract = {};
          switch (ownerInteract.emoji) {
            case "love":
              userInteract = {
                color: "#ED2E4E",
                emoji: "Love",
                image: require("../icons/emoji/love.svg")
              };
              break;
            case "care":
              userInteract = {
                color: "#F7B126",
                emoji: "Care",
                image: require("../icons/emoji/care.svg")
              };
              break;
            case "wow":
              userInteract = {
                color: "#F7B126",
                emoji: "Wow",
                image: require("../icons/emoji/wow.svg")
              };
              break;
            case "like":
              userInteract = {
                color: "#1D69F8",
                emoji: "Like",
                image: require("../icons/emoji/like.svg")
              };
              break;
            case "dislike":
              userInteract = {
                color: "red",
                emoji: "Dislike",
                image: require("../icons/emoji/dislike.png")
              };
              break;
            case "angry":
              userInteract = {
                color: "#E85E07",
                emoji: "Angry",
                image: require("../icons/emoji/angry.svg")
              };
              break;
          }
          this.post.ownerInteract = userInteract;
        }
        this.post.replyContent = "";
        this.post.topInteracts = topEmoji(this.post.interacts);
        this.post.totalComments = totalComments(this.post.comments);
        this.post.showAllChilds = true;
        if (this.post.comments.length > 3) this.post.showAllChilds = false;
        this.post.comments = mapComments(this.post.comments);
        this.post.detailInteracts = createDetailInteracts(this.post.interacts);
        for (const comment of this.post.comments) {
          comment.childComments = mapComments(comment.childComments, true);
        }
        this.basePost = JSON.parse(JSON.stringify(this.post));

        this.post.comments = sortComments(this.post.comments);
        for (const comment of this.post.comments) {
          comment.childComments = sortComments(comment.childComments);
        }
        this.basePost = JSON.parse(JSON.stringify(this.post));
        document.title = this.post.title.toUpperCase() + " - LEMONCAT";
        this.isLoading = false;
      }
    }
  }
};
</script>
<style scoped>
.container {
  background-color: #48cf73;
}
.body-container {
  background-color: #ffffff !important;
}
.sticky {
  position: fixed;
  top: 0;
}
.row-style {
  padding: 0 !important;
}
.row {
  --bs-gutter-x: 0 !important;
}
.trending-link {
  text-decoration: none;
  color: white;
}
.trending-link:hover {
  text-decoration: none;
  color: #f6dc24;
}
.rating:hover {
  color: #4f86d9;
}
.shadow-box {
  -webkit-box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.38);
  box-shadow: 1px 1px 17px 0px rgba(0, 0, 0, 0.38);
}
.block {
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 10px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  color: gray;
}
.block:hover {
  display: block;
  width: 100%;
  border: none;
  background-color: transparent;
  padding: 10px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  color: gray;
  background-color: #d1d1d1;
}
.react-icon {
  height: 38px;
  width: 38px;
  transition: all 0.1s ease-in-out;
}
.react-icon:hover {
  height: 41px;
  width: 41px;
  transform: scale(1.15);
}
.no-gutters {
  width: auto;
  margin-left: 10px;
}
</style>
