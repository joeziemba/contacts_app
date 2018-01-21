import ReactTestUtils from 'react-dom/test-utils';
import SubmissionForm from '../../src/containers/Form';

describe('Submission Form', () => {
//// SETUP /////////////////
  let wrapper;

  beforeEach( () => {
    wrapper = mount(<SubmissionForm />)
  })

  it('should have blank initial state', () => {
    expect(wrapper.state()).toEqual({
      firstName: '',
      lastName: '',
      emailAddress: '',
      phoneNumber: '',
      companyName: '',
      errors: []
    })
  })

  it('should render a form with an onSubmit function', () => {
    expect(wrapper.find('form')).toBePresent
    expect(wrapper.find('form')).toHaveProp("onSubmit")
  })

  it('should render 5 TextField components', () => {
    expect(wrapper.find('TextField')).toBePresent
    expect(wrapper.find('TextField').length).toEqual(5)
  })

  it('should have an input named firstName with a handleChange function as a prop', () => {
    expect(wrapper.find({type: 'text', name: 'firstName'})).toBePresent()
    expect(wrapper.find({type: 'text', name: 'firstName'})).toHaveProp('onChange')
  })

  it('should have an input named lastName with a handleChange function as a prop', () => {
    expect(wrapper.find({type: 'text', name: 'lastName'})).toBePresent()
    expect(wrapper.find({type: 'text', name: 'lastName'})).toHaveProp('onChange')
  })

  it('should have an input named emailAddress with a handleChange function as a prop', () => {
    expect(wrapper.find({type: 'email', name: 'emailAddress'})).toBePresent()
    expect(wrapper.find({type: 'email', name: 'emailAddress'})).toHaveProp('onChange')
  })

  it('should have an input named phoneNumber with a handleChange function as a prop', () => {
    expect(wrapper.find({type: 'tel', name: 'phoneNumber'})).toBePresent()
    expect(wrapper.find({type: 'tel', name: 'phoneNumber'})).toHaveProp('onChange')
  })

  it('should have an input named companyName with a handleChange function as a prop', () => {
    expect(wrapper.find({type: 'text', name: 'companyName'})).toBePresent()
    expect(wrapper.find({type: 'text', name: 'companyName'})).toHaveProp('onChange')
  })

  it('should have a submit input', () => {
    expect(wrapper.find({type: 'submit'})).toBePresent()
  })

  it('should control the values of inputs through state', () => {
    wrapper.setState({
      firstName: 'Joe',
      lastName: 'Ziemba',
      emailAddress: 'joe@test.com',
      phoneNumber: '1234567890',
      companyName: 'Test'
    })
    expect(wrapper.find({name: 'firstName'}).props().value).toEqual('Joe')
    expect(wrapper.find({name: 'lastName'}).props().value).toEqual('Ziemba')
    expect(wrapper.find({name: 'emailAddress'}).props().value).toEqual('joe@test.com')
    expect(wrapper.find({name: 'phoneNumber'}).props().value).toEqual('1234567890')
    expect(wrapper.find({name: 'companyName'}).props().value).toEqual('Test')

  })
})
