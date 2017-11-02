# Why won't react bootstrap close?

I was trying to figure out why a `SplitButton` drop down menu was not closing
after one of the items was selected in the drop down.

I wrote this tiny app to show the difference in behaviour between
Plain Old Bootstrap (POBS) and react-bootstrap.

After an item in the `SplitButton` drop down is selected, the item retains
focus. There is an `onSelect` callback on `SplitButton` that's called,
well, after the use select from the drop down.

The simple thing I tried is adding a simple `blur` event to it.

See `src/component/EditDropdown/index.jsx` where the `SelectButton` is
implemented.

```javascript
          <SplitButton
              id='pick-button'
              title='Pick Me'
              onSelect={(k,e)=>(e.target.blur())}
          >
```

[See the docs for `onSelect`.](https://react-bootstrap.github.io/components.html#btn-dropdowns-props-split)
