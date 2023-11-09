import { create } from "zustand";
import {getUserData} from './hooks'

const userData = getUserData();

const useUserStore = create((set) => ({
    name: userData.name,
    email: userData.email,
    userId: userData.userId,
    profilePic: userData.profilePic,
    tag: userData.tag,
    followers: userData.followers,
}))