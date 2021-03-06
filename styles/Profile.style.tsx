import styled from "styled-components";

export const Wrapper = styled.div``;
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.grey};
  padding: ${({ theme: { spaces } }) => spaces.md};
  border-radius: 1rem;
`;
export const AvatarContainer = styled.div`
  position: relative;
`;
export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 120px;
`;

export const UpdateAvatarButton = styled.input`
  display: none;
`;

export const VisibleUpdateAvatarButton = styled.button`
  background: ${({ theme: { colors } }) => colors.primary};
  border: none;
  border-radius: 5px;
  padding: ${({ theme: { spaces } }) => spaces.sm};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  cursor: pointer;
  svg {
    height: 20px;
    fill: ${({ theme: { colors } }) => colors.white};
  }
`;

export const FriendsWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: ${({ theme: { spaces } }) => spaces.md};
  position: relative;
`;
export const FriendsInnerContainer = styled.div`
  display: flex;
  padding: 0 ${({ theme: { spaces } }) => spaces.lg};
`;
export const FriendContainer = styled.a<{ pos: number }>`
  margin: 0 ${({ theme: { spaces } }) => spaces.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translateX(${({ pos }) => `${pos}%`});
  transition: 0.4s;
  text-decoration: none;
`;
export const FriendAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 70px;
`;
export const FriendName = styled.p`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  color: ${({ theme: { colors } }) => colors.dark};
  margin-bottom: 0;
`;

export const CarouselButton = styled.button<{ flip?: boolean }>`
  background: ${({ theme: { colors } }) => colors.primary + "77"};
  border: none;
  padding: ${({ theme: { spaces } }) => spaces.sm};
  border-radius: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  z-index: 3;
  transform: translateY(-50%);
  height: 100%;
  width: 45px;
  cursor: pointer;
  outline: none;
  transition: background 0.3s;
  ${({ flip }) => (flip ? "right:0;" : "left:0")};
  svg {
    fill: ${({ theme: { colors } }) => colors.white};
    height: 15px;
    padding-bottom: 1px;
  }
  :hover {
    background: ${({ theme: { colors } }) => colors.primary};
  }
`;

export const NoFriends = styled.p`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.dark + "95"};
`;
export const AddRemoveUndoButton = styled.button<{ variant: string }>`
  height: 2.5em;
  background: ${({ theme: { colors }, variant }) => {
    //@ts-ignore;
    return colors[variant];
  }};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  color: ${({ theme: { colors } }) => colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 2px 14px ${({ theme: { colors } }) => colors.dark + "40"};
  transition: all 0.3s;
  outline: none;
  :hover {
    background: ${({ theme: { colors }, variant }) => {
      //@ts-ignore;
      return colors[variant] + "99";
    }};
  }
  :active {
    box-shadow: 0 2px 4px ${({ theme: { colors } }) => colors.dark + "40"};
  }
  min-width: 100px;
  margin-top: ${({ theme: { spaces } }) => spaces.md};
`;

export const FriendRequestsLink = styled.a`
  text-align: center;
  text-decoration: none;
  color: ${({ theme: { colors } }) => colors.primary};
`;
export const FriendsLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EditNameButton = styled.button`
  background: ${({ theme: { colors } }) => colors.primary};
  color: ${({ theme: { colors } }) => colors.white};
  border: none;
  padding: ${({ theme: { spaces } }) => spaces.sm + " " + spaces.md};
  cursor: pointer;
  border-radius: 5px;
  margin: 0 3px;
`;
export const NameEditContainer = styled.div`
  display: flex;
  /* align-items: center; */
  margin-top: ${({ theme: { spaces } }) => spaces.md};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
`;
export const Username = styled.p`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
  margin: 0;
  text-transform: uppercase;
  margin-right: ${({ theme: { spaces } }) => spaces.md};
`;

export const EditInput = styled.input`
  border-radius: 5px;
  border: 1px solid ${({ theme: { colors } }) => colors.dark + "15"};
  outline: none;
  transition: all 0.5s;
  background: ${({ theme: { colors } }) => colors.grey};
  font-family: inherit;
  padding-left: ${({ theme: { spaces } }) => spaces.md};
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
  color: ${({ theme: { colors } }) => colors.dark};
  margin-right: ${({ theme: { spaces } }) => spaces.sm};
  ::placeholder {
    font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
    color: ${({ theme: { colors } }) => colors.dark + "70"};
  }
  :focus {
    box-shadow: 0 0 2px ${({ theme: { colors } }) => colors.primary};
    border-color: ${({ theme: { colors } }) => colors.primary + "15"};
  }
`;
