export async function createPost(formData) {
    const token = localStorage.getItem("token");

    try {
        const response = await fetch("https://tarmeezacademy.com/api/v1/posts", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: formData
        });

        const textResponse = await response.text();
        let data;
        try {
            data = JSON.parse(textResponse);
        } catch (e) {
            console.log("Response text:", textResponse);
        }

        if (!response.ok) {
            console.error("Error status:", response.status, data);
            alert("Error: " + response.status);
            return false;
        }
        if (response.ok) {
    window.dispatchEvent(new Event('newPostAdded'));
}
       
    } catch (error) {
        console.error("Network or fetch error:", error.message);
        alert("حدث خطأ في الاتصال بالسيرفر.");
    }
}