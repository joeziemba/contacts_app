import ContactTile from '../../src/components/ContactTile';

describe('ContactTile', () => {
//// SETUP /////////////////
  let wrapper;
  let deleteSpy = jasmine.createSpy('deleteContact')
  beforeEach( () => {
    wrapper = mount(
      <ContactTile
        id='1'
        firstName='First Name'
        lastName='Last Name'
        email='Email'
        phone='Phone'
        company='Company'
        tileClass='contact-tile'
        deleteContact={deleteSpy}
      />
    )
  })

  it('should display props: firstName, lastName, email, phone and company', () => {
    expect(wrapper).toIncludeText('First Name')
    expect(wrapper).toIncludeText('Last Name')
    expect(wrapper).toIncludeText('Email')
    expect(wrapper).toIncludeText('Phone')
    expect(wrapper).toIncludeText('First Name')
    expect(wrapper).not.toIncludeText('contact-tile')
  })

  it('should have the grid-x and the tileClass prop as className', () => {
    expect(wrapper.find('.grid-x')).toBePresent()
    expect(wrapper.find('.grid-x')).toHaveClassName('contact-tile')
  })

  it('should display a delete button with an id of props.id', () => {
    expect(wrapper.find('.delete-button')).toBePresent()
    expect(wrapper.find('.delete-button').props().id).toEqual('1')
  })

  it('should trigger the delete function', () => {
    wrapper.find('.delete-button').simulate('click')
    expect(deleteSpy).toHaveBeenCalled()
  })
})
