import TextField from '../../src/components/TextField'

describe('TextField', () => {
//// SETUP /////////////////
  let wrapper;
  let changeSpy = jasmine.createSpy('handleChange')

  beforeEach( () => {
    wrapper = mount(
      <TextField
        fieldName='lastName'
        fieldType='text'
        fieldLabel='Last Name'
        fieldValue='Test'
        changeFunction={changeSpy}
      />
    )
  })

  it('should render an a label tag with the fieldLabel prop and fieldName prop', () => {
    expect(wrapper.find('label')).toBePresent()
    expect(wrapper.find('label').text()).toEqual('Last Name')
    expect(wrapper.find('label').props().htmlFor).toEqual('lastName')
  })

  it('should display an input with name, type, value and onChange props', () => {
    expect(wrapper.find('input')).toBePresent()
    expect(wrapper.find('input').props().name).toEqual('lastName')
    expect(wrapper.find('input').props().type).toEqual('text')
    expect(wrapper.find('input').props().value).toEqual('Test')
    expect(wrapper.find('input').props().onChange).toEqual(changeSpy)
  })

  it('should trigger the onChange function when a user types in the field', () => {
    let input = wrapper.find('input')
    input.simulate('change');
    expect(changeSpy).toHaveBeenCalled()
  })
})
