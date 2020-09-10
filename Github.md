## Git Squash into Parent

```sh
git rebase -i [startpoint] 
```

```
pick   cd27881  // squash all into this commit
squash 3eaee88
squash e1d897b
squash bbef7f2
reword 6391223
```

## Git Squash into Parent from between

```
squash 3eaee88   // squash between commit into newest
squash e1d897b
squash bbef7f2
reword 6391223
```

## Git Rebase all commit into Master

```sh
git rebase -i --root master
```
