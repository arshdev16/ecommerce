import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "./firebase";
import { userDocInterface } from "./interfaces";

export const getUserData = () => {
  const [user] = useAuthState(auth);

  const [userDoc, setUserDoc] = useState<userDocInterface>({
    name: "",
    email: "",
    userId: "",
    profilePic: "",
    tag: "",
    followers: 0,
  });

  useEffect(() => {
    let unsubscribe;

    if (user) {
      const ref = doc(db, "users", user.uid);
      unsubscribe = onSnapshot(ref, async (doc) => {
        setUserDoc({
          email: doc.data()?.email,
          name: doc.data()?.name,
          profilePic: doc.data()?.profilePic,
          tag: doc.data()?.tag,
          userId: doc.data()?.userId,
          followers: doc.data()?.followers,
        });
      });
    }
    return unsubscribe;
  }, [user]);
  return userDoc;
};
