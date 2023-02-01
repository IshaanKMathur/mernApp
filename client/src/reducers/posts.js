import posts from "../Components/Posts/Posts";

export default (state=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}