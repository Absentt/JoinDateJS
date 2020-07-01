# JoinDateJS
PAPI join date script converting from epoch to long date format

`
/papi parse me %javascript_join_date%
`

Change:
``js
toDateString()
``
to
```js
toUTCstring
```
or (depreciated)
```js
toGMTstring
```
depending on what you want.
