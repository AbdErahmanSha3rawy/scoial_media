import toast from "react-hot-toast";

export async function updatePost(id, text) {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("_method", "put");
    formData.append("body", text); 

    try {
        let response = await fetch(`https://tarmeezacademy.com/api/v1/posts/${id}`, {
            method: "POST", 
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });

        let data = await response.json();

        if (response.ok) {
            toast.success('Post updated successfully!');
        } else {
            console.error(data);
            toast.error(data.message || 'Failed to update post');
        }
    } catch (error) {
        console.error("Network error:", error);
        toast.error('Something went wrong!');
    }
}