<template>
  <v-menu bottom right min-width="150px" rounded offset-y>
    <template v-slot:activator="{ on }">
      <v-btn icon x-large v-on="on">
        <v-avatar color="brown" size="35">
          <span class="white--text headline">{{ user.initials }}</span>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list-item-content class="justify-center">
        <div class="mx-auto text-center" style="padding-bottom:10px">
          <v-avatar style="margin-top:10px" color="brown">
            <span class="white--text headline">{{ user.initials }}</span>
          </v-avatar>
          <h3>{{ user.fullName }}</h3>
          <p class="caption mt-1">
            {{ user.email }}
          </p>
          <hr />
          <v-list dense>
            <v-list-item-group
              style="display:flex;flex-direction: column"
              v-model="selectedItem"
              color="primary"
            >
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </v-list-item-content>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    user: {
      initials: "JD",
      fullName: "John Doe",
      email: "john.doe@doe.com"
    },
    selectedItem: 1,
    items: [{ text: "Profile" }, { text: "Account" }, { text: "Logout" }]
  })
};
</script>
