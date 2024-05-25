export interface Theme {
    subscribers: string[],
    posts: string[],
    _id: string,
    themeName: string,
    userId: userId, 
    created_at: string,
    updatedAt: string,
    __v: number
};


interface userId {
    themes: string[],
    posts: string[],
    _id: string,
    tel: string,
    email: string,
    username: string,
    password: string,
    created_at: string,
    updatedAt: string,
    __v: 0
};

export interface Post {
    likes: string[],
    _id: string,
    text: string,
    userId: userId,
    themeId: ThemeId,
    created_at: string,
    updatedAt: string,
    __v: number
};

interface ThemeId {
    "subscribers": string[],
    "posts": string[],
    "_id": string,
    "themeName": string,
    "userId": string,
    "created_at": string,
    "updatedAt": string,
    "__v": number
}
