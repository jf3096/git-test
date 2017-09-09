const git = require('simple-git');

git()
    .outputHandler(function (command, stdout, stderr) {
        stdout.pipe(process.stdout);
        stderr.pipe(process.stderr);
    })
    .pull(function (err, update) {
        if (update && update.summary.changes) {
            require('child_process').exec('npm restart');
        }
    })
    .add('./*')
    .commit("first commit!")
    .push(['--force', 'origin', 'test'], function () {
        // done.
    });
