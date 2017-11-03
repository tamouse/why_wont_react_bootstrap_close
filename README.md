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


## Nope

This isn't fixing the issue I'm having in my code.

In my code, the `SplitButton` contains several simple components that in turn
render a `MenuItem` and possibly some other things. These also *do* stuff like
throw up Modals, update (mutate) the database, set states, etc.

If there's something that requires the user to click, such as answer a Modal,
then the menu disappears.

**HOWEVER** there is one menu item which just rolls off to mutate the database
and nothing else. In this particular case, the dropdown menu still shows.

Back to the drawing board.

