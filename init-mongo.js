db.createUser({
    user: "username",
    pwd: "password",
    roles: [
        {
            role: "readWrite",
            db: "social_media_database"
        }
    ]
});