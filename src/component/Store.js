import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name:'user',
    initialState:{name:'kim',age:20},
    reducers:{
        changeName(state){
            state.name='john kim'
        },
        increase(state,action){
            state.age += action.payload
        }
    }
})

export let {changeName,increase} = user.actions;

let cart = createSlice({
    name:'cart',
    initialState:[
        {imgUrl : "img/colorama2.jpg", name : 'TEA POT - ELECTRIC BLUE AND CORAL WITH SOFT PINK RIM', count : 1, price : 41.50},
        {imgUrl : "img/colorama1.jpg", name : 'MUG - CORAL AND ELECTRIC BLUE WITH SOFT PINK RIM', count : 1, price : 18.50}
    ],
    reducers:{
        addCount(state,action){
            let num = state.findIndex((a)=>{return a.id===action.payload})
            console.log(num);
            state[num].count++
        },
        removeCount(state,action){
            let num = state.findIndex((a)=>{return a.id===action.payload})
            console.log(num);
            state[num].count--
        },
        addItem(state,action){
            state.push(action.payload)
        },
        sortName(state,action){
            state.sort((a,b) =>
                a.name > b.name ? 1 : -1,
            );
        }
    } 
})

export let { addCount, removeCount, addItem, sortName } = cart.actions

export default configureStore({
    reducer: {
        user:user.reducer,
        cart:cart.reducer
    }
})