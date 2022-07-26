import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    value: {
      isOnline: false,
      users: [
        {
          id: 1,
          username: "Elon Musk",
          password: "Tesla!",
          image:
            "https://i.insider.com/62b4c1229f5e550019aa6331?width=1136&format=jpeg",
          chats: [],
        },
        {
          id: 2,
          username: "Eminem",
          password: "Eminem!",
          image:
            "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F06%2F23%2Feminem.jpg",
          chats: [],
        },
        {
          id: 3,
          username: "Will Smith",
          password: "Will!",
          image:
            "https://ichef.bbci.co.uk/news/640/cpsprodpb/367C/production/_124084931_gettyimages-1388090285.jpg",
          chats: [],
        },
        {
          id: 4,
          username: "Margot Robbie",
          password: "Margot!",
          image:
            "https://pyxis.nymag.com/v1/imgs/641/649/751adadbb52786c2e9675588d85a8b8967-GettyImages-1267517438.rsquare.w700.jpg",
          chats: [],
        },
        {
          id: 5,
          username: "Mantas Rimavičius",
          password: "Mantas!",
          image:
            "https://cdn1.picuki.com/hosted-by-instagram/q=0exhNuNYnjBcaS3SYdxKjf8F2vJzWgxSZ60STLepjSVmIR1vLHOapZA0mpCj4yRwKwVlASuRYzln548qWFhYZFZ8P03dSL2JSzpU7q2eXICj0D1k8ZRjkL00LnIfbH6m9ssqOzjYMTIfQeoEH%7C%7Cbx7a8Koru5A2MGo1zRMrBC0GAG4fy3UPI7mslm3ayEv0PxtpcyKzNe92U1aUospY+X+3QJWPr5PN1gpKZlR7pCicgIrdDgmBq7EHl3Kj4uUQ+RubTOl+1egQe8fWwuwVmSeJgaFxUypHirkFA0toFzqbWXbNRL+NwZkIH2CmUEXTE86kEon5zgx3PySVTxjmVH8TGC7LaVe7M09oLJN9e3ZMvHmiiVTavNGu9EZVYrMPD0Z2reKaSyEI5Wk9YZTt0ZhQfhqECCerPLzxp1WW0chWPSDQ==.jpeg?1",
          chats: [],
        },
      ],
      currentUserId: null,
      chats: [],
      chatIndex: 0,
    },
  },
  reducers: {
    changeStatus: (state, action) => {
      state.value.isOnline = action.payload;
    },
    addUser: (state, action) => {
      state.value.users.push(action.payload);
    },
    updateCurrentUserId: (state, action) => {
      state.value.currentUserId = action.payload;
    },
    updateUsers: (state, action) => {
      state.value.users = action.payload;
    },
    createChat: (state, action) => {
      state.value.chats.push(action.payload);
    },
    findChatIndex: (state, action) => {
      state.value.chatIndex = action.payload;
    },
    send: (state, action) => {
      state.value.chats[state.value.chatIndex].messages.push(action.payload);
    },
    updateChats: (state, action) => {
      state.value.chats = action.payload;
    },
  },
});

export const {
    changeStatus,
    addUser,
    updateCurrentUserId,
    updateUsers,
    createChat,
    findChatIndex,
    send,
    updateChats
} = userSlice.actions;
export default userSlice.reducer;