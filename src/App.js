// import React from 'react'
// import './Style.css'
// import ReadmeList from './components/ReadmeList/ReadmeList'
// import ReadmeItem from './components/ReadmeItem/ReadmeItem'

// export default function App() {
//     const items = [
//         {id: 1, title: 'War and Piece', important: true, tags:['love', 'train']},
//         {id: 2, title: 'Anna Karenina', important: false, tags:['love', 'train']}
//     ]
//     return (
//         <div>
//            {items.map(o => <ReadmeItem tags={o.tags} title={o.title} important={o.important} />)}
//         </div>
//     )
// }

import React from 'react'
import ContactList from './components/ContactList'



export default function App() {
    const contacts = [
        {name: 'SomeOne', imgUrl: "https://i.pravatar.cc/150?img=12", lastMessage: 'Hallo', htag: '#friend'},
        {name: 'AnyOne', imgUrl: "https://i.pravatar.cc/150?img=13", lastMessage: 'Hi', htag: '#friend'},
        {name: 'SomeBody', imgUrl: "https://i.pravatar.cc/150?img=14", lastMessage: 'NiHao', htag: '#friend'},
    ]
    return (
        <div>
           {contacts.map(o => <ContactList name={o.name} imgUrl={o.imgUrl} lastMessage={o.lastMessage} htag={o.htag} />)} 
        </div>
    )
}
