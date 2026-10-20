import toast from "react-hot-toast";

export async function login({ usernameValue, passwordValue, navigate }) {
  

    const formData = new FormData();
    formData.append("username", usernameValue);

formData.append("password", passwordValue);

    try {
        const response = await fetch("https://tarmeezacademy.com/api/v1/login", {
            method: "POST",
            headers: {
                "Accept": "application/json"
            },
            body: formData
        });

        const textResponse = await response.text();
        console.log("Raw Server Response:", textResponse);

        let data;
        try {
            data = JSON.parse(textResponse);
        } catch (e) {
            throw new Error("السيرفر رجع استجابة غير صالحة.");
        }

        if (!response.ok) {
            throw new Error(data.message || "حدث خطأ أثناء تسجيل الدخول");
        }

        localStorage.setItem("user_info", JSON.stringify({ username: usernameValue, password: passwordValue }));
        localStorage.setItem("user_id", data.user.id);
        localStorage.setItem("Account_Id", data.id);
        localStorage.setItem("token", data.token);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("user_name", data.user.username);
        
        let profile_image = (data.user.profile_image && data.user.profile_image.length > 0) 
            ? data.user.profile_image 
            : "imgs/unknown.jpg";
        localStorage.setItem("profile_image", profile_image);
        localStorage.setItem("user", JSON.stringify(data.user));

        if (data.token) {
            console.log("Token saved successfully:", data.token);
            window.dispatchEvent(new Event('authChange'));
           toast.success('Log_in successfully !');

            setTimeout(() => {
                navigate("/feedpage");
            }, 1000);
            

        } else {
            console.error("Token not found in response!"); 
        }

    } catch (error) {
        console.error("Login error:", error.message);
        alert(error.message);
    }
}