const git = require('simple-git');

git()
    .add('./*')
    .commit('auto commit')
    .push(['-u', 'origin', 'master'], function () {
    });