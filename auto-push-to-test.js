const git = require('simple-git');

git()
    .add('./*')
    .commit('auto commit')
    .addRemote('origin', 'https://github.com/jf3096/git-test.git')
    .push(['-u', 'origin', 'test'], function () {
    });