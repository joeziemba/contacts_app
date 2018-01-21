import ContactFilter from '../../src/components/ContactFilter';

describe('ContactFilter', () => {
//// SETUP /////////////////
  let wrapper;
  let filterSpy = jasmine.createSpy('toggleFilter')
  let sortSpy = jasmine.createSpy('toggleSort')

  beforeEach( () => {
    wrapper = mount(
      <ContactFilter
        filterFunction={filterSpy}
        sortFunction={sortSpy}
        filter={false}
        sort={false}
      />
    )
  })

  it('should display a filter button', () => {
    expect(wrapper.find('#filter-button')).toBePresent()
    expect(wrapper.find('#filter-button')).toHaveText('Show .com emails')
    expect(wrapper.find('#filter-button')).toHaveClassName('.button')
    expect(wrapper.find('#sort-button')).not.toHaveClassName('.active')
  })

  it('should display a sort button', () => {
    expect(wrapper.find('#sort-button')).toBePresent()
    expect(wrapper.find('#sort-button')).toHaveText('Sort By Email')
    expect(wrapper.find('#sort-button')).toHaveClassName('.button')
    expect(wrapper.find('#sort-button')).not.toHaveClassName('.active')
  })

  it('should add the active class to filter-button when props.filter is true', () => {
    wrapper.setProps({
      filter: true
    })
    expect(wrapper.find('#filter-button')).toHaveClassName('.active')
    expect(wrapper.find('#sort-button')).not.toHaveClassName('.active')
  })

  it('should add the active class to filter-button when props.filter is true', () => {
    wrapper.setProps({
      sort: true
    })
    expect(wrapper.find('#sort-button')).toHaveClassName('.active')
    expect(wrapper.find('#filter-button')).not.toHaveClassName('.active')
  })

  it('should trigger props.filterFunction on click', () => {
    wrapper.find('#filter-button').simulate('click')
    expect(filterSpy).toHaveBeenCalled()
  })

  it('should trigger props.sortFunction on click', () => {
    wrapper.find('#sort-button').simulate('click')
    expect(sortSpy).toHaveBeenCalled()
  })
})
