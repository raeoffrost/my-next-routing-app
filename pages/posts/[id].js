import { useRouter } from "next/router";
import { useState } from "react";
import Nav from "@/pages/components/Nav";
import styles from "@/styles/Home.module.css";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const postsArr = [
  {
    id: 1,
    name: "Weather News",
    content:
      "Suspendisse potenti. Donec blandit magna at mi porta lacinia. Sed eleifend magna dolor, eget rhoncus sem porttitor a. In fringilla vitae velit nec viverra. Aliquam scelerisque tincidunt lacus eu vestibulum. Sed euismod sollicitudin lorem, sed elementum magna venenatis ac. Vestibulum nisl ante, iaculis ut pellentesque ac, auctor vitae sapien. Vestibulum vitae mauris convallis, scelerisque est at, tempor diam. Sed vel efficitur mauris, sit amet pellentesque tortor. Suspendisse dignissim diam quis varius volutpat. Mauris risus urna, lobortis efficitur tortor ut, vehicula lobortis eros. Nunc vitae magna vitae justo ultricies eleifend at in nibh. Donec dolor elit, consectetur a imperdiet nec, congue nec sapien. Curabitur auctor odio a mauris tincidunt, non lobortis diam dictum. Nullam lacus justo, tincidunt accumsan consectetur eget, mollis sit amet magna.",
  },
  {
    id: 2,
    name: "Political News",
    content:
      "Nunc condimentum consequat sem sit amet sollicitudin. Nunc velit magna, mattis sed varius eu, ultricies non libero. Integer pellentesque bibendum aliquam. Mauris id consectetur mauris. Etiam semper finibus velit, nec aliquam libero. Pellentesque sem nunc, commodo sit amet tortor sed, efficitur ornare nisi. Donec eget lorem sit amet diam mollis congue et quis quam. Phasellus pretium nulla vel lacinia tincidunt. Mauris consequat erat a nunc accumsan dapibus nec at tellus. Maecenas pharetra, augue sagittis suscipit elementum, nibh neque euismod felis, ac lacinia sapien ligula vitae dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae purus dapibus risus hendrerit porta. Donec velit dolor, tempus id orci sit amet, egestas sodales erat. Nulla sit amet massa vel metus tempus varius eu id erat.",
  },
  {
    id: 3,
    name: "Culture News",
    content:
      "Maecenas bibendum, augue sed commodo dictum, eros nibh ultricies urna, in maximus purus lacus sed ex. Mauris sed nulla pellentesque, tincidunt quam ac, finibus sem. Curabitur facilisis dolor id nulla iaculis laoreet. Nulla ac ligula eu ante vestibulum semper in in libero. Duis vulputate turpis eget nisl vehicula, quis dapibus purus ullamcorper. Sed pharetra eros orci, non rhoncus libero pretium eu. Mauris tincidunt ipsum in ligula sollicitudin, ut feugiat dolor accumsan. ",
  },
  {
    id: 4,
    name: "World News",
    content:
      "Donec vulputate faucibus libero non dictum. Phasellus blandit ligula a nibh tincidunt, in luctus lacus viverra. Pellentesque eget viverra enim. Morbi sollicitudin fermentum venenatis. Vivamus vestibulum felis tortor, et fringilla diam convallis porta. Vivamus vehicula justo at consequat gravida. Donec fermentum tellus sit amet nisl imperdiet, vulputate aliquet dui maximus. Sed auctor magna pulvinar laoreet rutrum. Integer malesuada sem a efficitur lacinia.",
  },
];
const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(postsArr.find((posts) => posts.id === Number(id)) || null);

  return (
    <div className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}>
      <Nav />
      <main className={styles.main}>
        <h1>Assignment 2</h1>
        <h3>{post.name}</h3>
        <p>Post ID: {id}</p>
        <p>{post.content}</p>
      </main>
    </div>
  );
};
export default Post;
