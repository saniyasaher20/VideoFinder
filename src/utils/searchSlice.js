import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        j: [
            'jethalal',
            'jcb',
            'johny johny yes papa',
            'jubin nautiyal new song',
            'jesus songs',
            'jhume jo pathan song',
            'jokes',
            'jungkook',
            'jabardasth',
            'jannat zubair'
        ],
        ja: [
            'jabardasth',
            'jannat zubair',
            'janam janam ka sath',
            'jaby koay',
            'japji sahib',
            'jai hanuman gyan gun sagar',
            'jana gana mana',
            'jass manak song',
            'jadugar',
            'jale song'
        ],
        jav: [
            'javed',
            'java',
            'java full course',
            'javed akhtar',
            'javascript',
            'javed ali songs',
            'javed ali',
            'javani',
            'javascript tutorial for beginners',
            'javed urfi'
        ],
        java: [
            'java',
            'java full course',
            'javascript',
            'javani',
            'javascript tutorial for beginners',
            'javascript full course',
            'javari junction',
            'java programming',
            'javascript tutorial',
            'java code with harry'
        ],
        javas: [
            'javascript',
            'javascript tutorial for beginners',
            'javascript full course',
            'javascript tutorial',
            'javascript mastery',
            'javascript code with harry',
            'javascript project',
            'javascript interview questions and answers',
            'javascript projects for beginners',
            'javascript course'
        ],
        javasc: [
            'javascript',
            'javascript tutorial for beginners',
            'javascript full course',
            'javascript tutorial',
            'javascript mastery',
            'javascript code with harry',
            'javascript project',
            'javascript interview questions and answers',
            'javascript projects for beginners',
            'javascript course'
        ],
        javascr: [
            'javascript',
            'javascript tutorial for beginners',
            'javascript full course',
            'javascript tutorial',
            'javascript mastery',
            'javascript code with harry',
            'javascript project',
            'javascript interview questions and answers',
            'javascript projects for beginners',
            'javascript course'
        ],
        javascri: [
            'javascript',
            'javascript tutorial for beginners',
            'javascript full course',
            'javascript tutorial',
            'javascript mastery',
            'javascript code with harry',
            'javascript project',
            'javascript interview questions and answers',
            'javascript projects for beginners',
            'javascript course'
        ],
        javascrip: [
            'javascript',
            'javascript tutorial for beginners',
            'javascript full course',
            'javascript tutorial',
            'javascript mastery',
            'javascript code with harry',
            'javascript project',
            'javascript interview questions and answers',
            'javascript projects for beginners',
            'javascript course'
        ],
        javascript: [
            'javascript',
            'javascript tutorial for beginners',
            'javascript full course',
            'javascript tutorial',
            'javascript mastery',
            'javascript code with harry',
            'javascript project',
            'javascript interview questions and answers',
            'javascript projects for beginners',
            'javascript course'
        ],
        javascrit: [
            'javascript',
            'javascript tutorial for beginners',
            'javascript full course',
            'javascript tutorial',
            'javascript mastery',
            'javascript code with harry',
            'javascript project',
            'javascript interview questions and answers',
            'javascript projects for beginners',
            'javascript course'
        ]

    },
    reducers: {
        cacheResults: (state, action) => {
            return { ...state, ...action.payload }
        }
    }

})

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;