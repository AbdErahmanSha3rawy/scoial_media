import axios from "axios";
import toast from "react-hot-toast";

function deletePost(item, onSuccess) {
    const token = localStorage.getItem("token");
    const params = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    };

    // تم تصحيح الرابط بإضافة // بعد https:
    axios.delete(`https://tarmeezacademy.com/api/v1/posts/${item}`, params)
        .then((response) => {
            toast.success("Post deleted successfully!");
            
            // لو باعت دالة لتحديث الـ State من الـ Parent استدعيها
            if (onSuccess) {
                onSuccess(item);
            } else {
                // الطريقة القديمة لو مش شغال بـ State
                const post = document.getElementById(`post-${item}`);
                if (post) post.remove();
            }
        })
        .catch((error) => {
            console.error("Delete failed:", error.response ? error.response.data.message : error.message);
            toast.error(error.response?.data?.message || "Failed to delete post");
        });
}

export { deletePost };