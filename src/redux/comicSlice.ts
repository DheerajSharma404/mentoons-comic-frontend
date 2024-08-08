import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Comic {
  name: string;
  desc: string;
  duration: string;
  thumbnail: string;
  videoLink: string;
  category: string;
}
interface CartItemsPrototype {
  thumbnail: string;
  name: string;
  price: number;
  quantity: number;
}

interface WishlistItemsPrototype {
  image: string;
  name: string;
}

export interface InitialStatePrototype {
  cart: CartItemsPrototype[];
  wishlist: WishlistItemsPrototype[];
  comics: Comic[];
}

const initialState: InitialStatePrototype = {
  cart: [],
  wishlist: [],
  comics: [
    // GroupSmall = (Age 6-12) GroupMedium = (Age 13-19) GroupLarge = (Age 20+) GroupXLarge = (Elders)
    {
      name: "Bet Your Life",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "2:17",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-09.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/BET_YOUR_LIFE.mp4",
      category: "groupMedium",
    },
    {
      name: "The Cell Life of Soniya",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "2:31",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-12.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/CELL_LIFE_OF_SONIYA_02.mp4",
      category: "groupMedium",
    },
    {
      name: "Choose Wisely",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "4:27",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-08.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/CHOOSE_WISLEY_3.mp4",
      category: "groupMedium",
    },
    {
      name: "Come out of Gaming",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "5:51",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-05.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/COME_OUT_OF_GAMING_02.mp4",
      category: "groupMedium",
    },
    {
      name: "Comic on Divorce",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "2:04",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-07.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/COMIC_ON_DIVORCE_01.mp4",
      category: "groupMedium",
    },
    {
      name: "Don't Fade Away",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "2:54",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-04.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/DONT_FADE_AWAY_02.mp4",
      category: "groupMedium",
    },
    {
      name: "Hungry for Likes Not Life",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "2:10",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-15.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/HUNGRY_FOR_LIKES_NOT_LIFE_01.mp4",
      category: "groupMedium",
    },
    {
      name: "One Way Trip",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "4:09",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-22.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/ONE-WAY-TRIP_1.mp4",
      category: "groupMedium",
    },
    {
      name: "Rishi and Rohit",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "2:20",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-16.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/RISHI+AND+ROHIT.mp4",
      category: "groupMedium",
    },
    {
      name: "Rohan and the Puppies",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "2:09",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-17.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/Rohan+and+the+Puppies_01.mp4",
      category: "groupMedium",
    },
    {
      name: "Tanya's Downfall",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "1:53",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-06.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+13+-+19/TANYA_DOWN-FALL_02.mp4",
      category: "groupMedium",
    },
    {
      name: "How Teenagers Lose Their Jobs Part-1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "1:13",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-23.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+20%2B/SANKAR_INTERVIEW.mp4",
      category: "groupLarge",
    },
    {
      name: "How Teenagers Lose Their Jobs Part-2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "0:58",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-24.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+20%2B/SANA_AUDIO_COMIC.mp4",
      category: "groupLarge",
    },
    {
      name: "I can Manage (Time Management)",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "1:29",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-02.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/Asha+%26+Simran-+Time+management+(6-12)_1.mp4",
      category: "groupSmall",
    },
    {
      name: "Comic on Honesty",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "1:16",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-24.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/COMIC_ON_HONESTY.mp4",
      category: "groupSmall",
    },
    {
      name: "Greeting Comic",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "1:44",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-24.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/GREETING_COMIC.mp4",
      category: "groupSmall",
    },
    {
      name: "Live and Let Live",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "2:02",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-21.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/SAY+SORRY+COMIC.mp4",
      category: "groupSmall",
    },
    {
      name: "Say Sorry",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "2:08",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-10.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/SAY+SORRY+COMIC.mp4",
      category: "groupSmall",
    },
    {
      name: "Supriya's Time Management",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "0:47",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-01.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/AGES+6+-+12/SUPRIYA_TIME_MANAGEMENT_1.mp4",
      category: "groupSmall",
    },
    {
      name: "Do You Know",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "3:44",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-20.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/BOOKS/BOOK+3+DO+YOU+KNOW_FINAL.mp4",
      category: "groupMedium",
    },
    {
      name: "Electronic Gadgets And Kids",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "5:21",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-13.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/BOOKS/BOOK_02_GADGETS_AND_KIDS_01.mp4",
      category: "groupMedium",
    },
    {
      name: "How to Handle Relationships",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente maiores eius libero a commodi.",
      duration: "5:21",
      thumbnail:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/thumbnail/1-14.jpg",
      videoLink:
        "https://mentoons-comics.s3.ap-northeast-1.amazonaws.com/BOOKS/HOW+TO+HANDLE+RELATIONSHIP.mp4",
      category: "groupMedium",
    },
  ],
};

export const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    addToCartReducer: (state, action) => {
      const currComic = action.payload;
      const isPresent = state.cart.find(
        (item) => item.thumbnail === currComic.thumbnail
      );

      if (!isPresent) {
        const newComic = { ...currComic, quantity: 1, price: 10 };
        state.cart.push(newComic);
      } else {
        isPresent.quantity += 1;
        isPresent.price = isPresent.quantity * 10;
      }
    },
    removeFromCartReducer: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.thumbnail != action.payload;
      });
    },
    addToWishlistReducer: (state, action) => {
      const isPresent = state.cart.find((item) => {
        return item.thumbnail == action.payload.thumbnail;
      });
      console.log(isPresent);
      if (!isPresent) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlistReducer: (state, action) => {
      state.wishlist = state.wishlist.filter((item) => {
        return item.image != action.payload;
      });
    },
    updateComicQuantityReducer: (
      state,
      action: PayloadAction<{ image: string; quantity: number }>
    ) => {
      const { image, quantity } = action.payload;
      const item = state.cart.find((item) => {
        return item.thumbnail == image;
      });
      if (item) {
        item.quantity = quantity;
        item.price = quantity * 10;
      }
    },
  },
});

export const {
  addToCartReducer,
  removeFromCartReducer,
  addToWishlistReducer,
  removeFromWishlistReducer,
  updateComicQuantityReducer,
} = comicsSlice.actions;

export default comicsSlice.reducer;
