export const createComment = async (Elcomment) => {
   
 const token = localStorage.getItem("token");
 const user_id = localStorage.getItem("user_id");



 
  try {   
    const response = await fetch(`https://tarmeezacademy.com/api/v1/posts/${user_id}/comments`, {
      method: 'POST',
      body: JSON.stringify({

   
        body:  Elcomment
      
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization':`Bearer ${token}`
      },
    });

    const data = await response.json();
    console.log('', data);
  } catch (error) {
    console.error('حدث خطأ:', error);
  }
};
