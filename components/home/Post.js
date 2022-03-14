import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl: "https://icons8.com/icon/WRqONArkLkVP/like",
    likedImageUrl:
      '<img src="https://img.icons8.com/ios/50/000000/add-to-favorites--v1.png"/>',
  },
  {
    name: "Comment",
    imageUrl: "https://icons8.com/icon/ATtN4Zacgm3f/comment",
  },
  {
    name: "Share",
    imageUrl: "https://icons8.com/icon/TDCU7KRViM2Q/share",
  },
  {
    name: "Save",
    imageUrl: "https://icons8.com/icon/3BSqrkPxx5eI/save",
  },
];

const Post = ({ post }) => {
  return (
    <View style={styles.postContainer}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={styles.postFooter}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentsSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

export default Post;

const PostHeader = ({ post }) => (
  <View style={styles.postHeaderContainer}>
    <View style={styles.postHeader}>
      <Image source={{ uri: post.profile_picture }} style={styles.stories} />
      <Text style={styles.postTextBody}>{post.user}</Text>
    </View>
    <Text style={styles.postText}>...</Text>
  </View>
);
const PostImage = ({ post }) => (
  <View style={styles.postView}>
    <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
  </View>
);
const PostFooter = () => (
  //
  <View style={styles.postFooterIcons}>
    <View style={styles.leftFooterIconContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
      <Icon
        imgStyle={(styles.footerIcon, styles.shareIcon)}
        imgUrl={postFooterIcons[2].imageUrl}
      />
    </View>
    <View style={styles.rightFooterIconContainer}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[3].imageUrl} />
    </View>
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  //
  <TouchableOpacity>
    //
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ post }) => (
  <View style={styles.likeContainer}>
    <Text style={styles.likes}>
      {ontransitioncancel.likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={styles.captionContainer}>
    <Text style={styles.captionText}>
      <Text style={styles.captionUser}>{post.user}</Text>
      <Text> {post.caption}</Text>
    </Text>
  </View>
);

const CommentsSection = ({post}) => (
  <View style={styles.commentSectionContainer}>
  {!!post.comments.length && (
  <Text style={styles.commentText}>
   View {post.comments.length > 1 ? ' all' : ""} {post.comments.length}{' '}
   {post.comments.length > 1 ? 'comments' : 'comment'}
  </Text>
  )}
  </View>
);

const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index} style={styles.commentsContainer}>
      <Text style={styles.comments}>
      <Text style={styles.commentsText}>{comment.user}</Text>
      {comment.comment}
      </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 30,
  },
  postText: {
    color: "white",
    fontWeight: "900",
  },
  postTextBody: {
    color: "white",
    marginLeft: 5,
    fontWeight: "700",
  },
  postHeaderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },
  postHeader: {
    flexDirection: "row", 
    alignItems: "center",
  },
  postImage: {
    height: "100%",
    resizeMode: "cover",
  },
  postView: {
    width: "100%",
    height: 450,
  },
  stories: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  postFooter: {
    marginHorizontal: 15,
    marginTop: 10,
  },
  postFooterIcons: {
    flexDirection: "row",
  },
  leftFooterIconContainer: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
  rightFooterIconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  shareIcon: {
    transform: [{ rotate: "320deg" }],
    marginTop: -3,
  },
  likes: {
    color: "white",
    fontWeight: "600",
  },
  likeContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  captionText: {
    color: "white",
  },
  captionUser: {
    fontWeight: "600",
    marginLeft: 5,
  },
  captionContainer: {
    marginTop: 5,
  },
  commentText: {
    color: 'gray',
  },
  commentSectionContainer: {
    marginTop: 5,
  },
  comments: {
    color: 'white',
  },
  commentsText: {
    fontWeight: "600",
  },
  commentsContainer: {},
});
