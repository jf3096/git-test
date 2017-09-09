const git = require('simple-git');

git()
    .add('./*')
    .commit("first commit!")
    .push(['-u', 'origin', 'test'], function () {
        // done.
    });
