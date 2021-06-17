
function Post({nota}) {
    return <div>{nota.post.cabeza}</div>
  }
  
  export const getServerSideProps = async (context) => {
    const res = await fetch(`https://api.ntmx.me/rnet/post/${context.params.id}`);
    const nota = await res.json();
    
    return {
      props: {
      nota,
      },
    };
    };

  export default Post