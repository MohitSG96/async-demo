console.log('before');
getUser(1, (user) => {
    getRepositories(user.gitHubUser, (repos) => {
        getCommits(repo, (commits) => {
            //Callback Hell or callback chrismas tree
        });
    });
});
console.log('after');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from database...');
        callback({
            id: id,
            gitHubUser: 'Mohit'
        });
    }, 2000);

}

function getRepositories(user, callback) {
    setTimeout(() => {
        console.log('Reading user repository from github...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}