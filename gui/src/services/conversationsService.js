import { loadListConversationsAction } from '../redux/actions/loadListConversationsAction'


import { dataTest } from '../DataTest';

// export const loadListConversations = () => new Promise((resolve, reject) => {
//     // Realm.open(databaseOptions).then(realm => {
//     //     let currentUser = realm.objects(USER_SCHEMA)[0]; // get first user
//     //     resolve(currentUser);
//     // }).catch((err) => reject(err));

//     // fetch data from server


// });


// export const thunk_action_creator = username => {
//     const user = username.replace(/\s/g, "");
//     store.dispatch(fetch_post());
//     return function(dispatch, getState) {
//       return fetch(`https://api.github.com/users/${user}`)
//         .then(data => data.json())
//         .then(data => {
//           if (data.message === "Not Found") {
//             throw new Error("No such user found!!");
//           } else dispatch(receive_post(data));
//         })
//         .catch(err => dispatch(receive_error()));
//     };
//   };



/**
 * @description Use middleware React Thunk to load list conversation from server, then dispatch it to state
 */

const loadListConversations = () => {

    // test data
    const listConversations = dataTest.listconversations;

    return (dispatch, getState) => {
        // return axios.get(apiUrl)
        //     .then(response => {
        //         dispatch(fetchData(response.data))
        //     })
        //     .catch(error => {
        //         throw (error);
        //     });

        dispatch(loadListConversationsAction(listConversations));
    };
};

export {
    loadListConversations
}