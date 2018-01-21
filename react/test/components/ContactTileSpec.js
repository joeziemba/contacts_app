import ContactTile from '../../src/components/ContactTile';

describe('ContactTile', () => {
//// SETUP /////////////////
  let wrapper;
  beforeEach( () => {
    wrapper = mount(
      <ContactTile
        firstName='First Name'
        lastName='Last Name'
        email='Email'
        phone='Phone'
        company='Company'
        tileClass='contact-tile'
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
})
