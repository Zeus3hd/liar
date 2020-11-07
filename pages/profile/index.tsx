import {
  Wrapper,
  UserInfoContainer,
  UserAvatar,
  Username,
  FriendsWrapper,
  FriendsContainer,
  FriendLink,
  FriendAvatar,
  FriendsPageLink,
  FriendsInnerContainer,
  SlideButton,
} from "../../styles/Profile.style";
import NewsFeed from "../../components/NewsFeed";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import CaretLeft from "../../utils/svg/CaretLeft.svg";
import CaretRight from "../../utils/svg/CaretRight.svg";

export default function Profile() {
  const [slidePos, setSlidePos] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [friendList] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
  ]);
  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <Wrapper>
        <UserInfoContainer>
          <UserAvatar src="/static/img/avatar.png" alt="avatar" />
          <Username>John Doe</Username>
        </UserInfoContainer>
        <FriendsWrapper>
          <FriendsContainer>
            <SlideButton
              direction="left"
              onClick={() => {
                if (slideIndex <= friendList.length - 5) {
                  setSlidePos((prevState) => prevState - 60);
                  setSlideIndex((prevState) => (prevState += 1));
                  console.log(slideIndex);
                }
              }}
            >
              <CaretLeft />
            </SlideButton>
            <FriendsInnerContainer slidePos={slidePos}>
              {friendList.map((friend) => (
                <Link href={`/profile/${friend}`} passHref key={friend}>
                  <FriendLink>
                    <FriendAvatar src="/static/img/avatar.png" alt="avatar" />
                  </FriendLink>
                </Link>
              ))}
            </FriendsInnerContainer>
            <SlideButton
              direction="right"
              onClick={() => {
                if (slideIndex > 0) {
                  setSlidePos((prevState) => prevState + 60);
                  setSlideIndex((prevState) => (prevState -= 1));
                }
              }}
            >
              <CaretRight />
            </SlideButton>
          </FriendsContainer>
          <Link href="profile/1/friends" passHref>
            <FriendsPageLink>
              Friends
              <br />
              Page
            </FriendsPageLink>
          </Link>
        </FriendsWrapper>

        <NewsFeed title="My wall" />
      </Wrapper>
    </>
  );
}