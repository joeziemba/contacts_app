import ContactsContainer from '../../src/containers/ContactsContainer'

describe('Contacts Container', () => {

//// SETUP /////////////////
  let wrapper;
  let testContacts = [{
    "id":1,
    "first_name":"Sterling",
    "last_name":"Archer",
    "email":"sterling@thefiggisagency.com",
    "phone":null,
    "company":"The Figgis Agency.",
    "created_at":"2018-01-17T22:31:16.980Z",
    "updated_at":"2018-01-17T22:31:16.980Z"
  },{
    "id":2,
    "first_name":"Lana",
    "last_name":"Kane",
    "email":"lana@thefiggisagency.com",
    "phone":null,
    "company":"The Figgis Agency.",
    "created_at":"2018-01-17T22:31:16.980Z",
    "updated_at":"2018-01-17T22:31:16.980Z"
  },{
    "id":3,
    "first_name":"Mallory",
    "last_name":"Archer",
    "email":'',
    "phone":"1234567890",
    "company":"The Figgis Agency.",
    "created_at":"2018-01-17T22:31:16.980Z",
    "updated_at":"2018-01-17T22:31:16.980Z"
  }]

  beforeEach(() => {
    spyOn(global, 'fetch').and.callFake(() => {
      let responseBody = JSON.stringify(testContacts);
      let response = new Response(responseBody, {
        status: '200',
        statusText: 'OK',
        headers: { 'Content-Type': 'application/json' }
      });
      return Promise.resolve(response);
    });

    wrapper = mount(<ContactsContainer />);
  })

//// TEST CASES /////////////////

  it('should have an empty contacts array as initial state', () => {
    expect(wrapper.state()).toEqual({
      contacts: [],
      filterEmail: false,
      sortEmail: false
    })
  })

  it('should render one instance of the SubmissionForm', () => {
    expect(wrapper.find('SubmissionForm')).toBePresent()
    expect(wrapper.find('SubmissionForm').length).toEqual(1)
  })

  it('should render one instance of the ContactFilter', () => {
    expect(wrapper.find('ContactFilter')).toBePresent()
    expect(wrapper.find('ContactFilter').length).toEqual(1)
  })

  it('should render one ContactTile component (table header)', () => {
    expect(wrapper.find('ContactTile')).toBePresent()
    expect(wrapper.find('ContactTile').length).toEqual(1)
  })

  it('should fetch all contacts and store them in state', (done) => {
    setTimeout(() => {
      expect(wrapper.state().contacts).toEqual(testContacts)
      done();
    }, 0)
  })

  it('should render ContactTile components equal to the number of contacts in state plus one (for the header)', (done) => {
    setTimeout(() => {
      expect(wrapper.find('ContactTile')).toBePresent()
      expect(wrapper.find('ContactTile').length).toEqual(4)
      expect(wrapper).toIncludeText('Mallory')
      done();
    }, 0)
  })

  it('should display only contacts with .com emails when filterEmail = true', (done) => {
    setTimeout(() => {
      wrapper.setState({
        filterEmail: true
      })
      expect(wrapper.find('ContactTile').length).toEqual(3)
      expect(wrapper).not.toIncludeText('Mallory')
      done();
    }, 0)
  })

  it('should disply contacts in order recieved when sortEmail = false', (done) => {
    setTimeout(() => {
      expect(wrapper.find('ContactTile').nodes[1].props.firstName).toEqual('Sterling')
      done();
    }, 0)
  })

  it('should disply contacts alphabetically by email when sortEmail = true', (done) => {
    setTimeout(() => {
      wrapper.setState({
        sortEmail: true
      })
      expect(wrapper.find('ContactTile').nodes[1].props.firstName).toEqual('Mallory')
      done();
    }, 0)
  })

})
