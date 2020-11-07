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

export default function Profile() {
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
            <SlideButton direction="left">{"<"}</SlideButton>
            <FriendsInnerContainer>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((friend) => (
                <Link href={`/profile/${friend}`} passHref key={friend}>
                  <FriendLink>
                    <FriendAvatar src="/static/img/avatar.png" alt="avatar" />
                  </FriendLink>
                </Link>
              ))}
            </FriendsInnerContainer>
            <SlideButton direction="right">{">"}</SlideButton>
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
