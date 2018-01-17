require 'rails_helper'

RSpec.describe Contact, type: :model do
  it 'should initiate with first_name, last_name, email, phone, company and timestamps' do
    newContact = Contact.new

    expect(newContact).to have_attribute(:first_name)
    expect(newContact).to have_attribute(:last_name)
    expect(newContact).to have_attribute(:email)
    expect(newContact).to have_attribute(:phone)
    expect(newContact).to have_attribute(:company)
    expect(newContact).to have_attribute(:created_at)
    expect(newContact).to have_attribute(:updated_at)
  end

  it 'should be valid with only first_name and last_name' do
    newContact = Contact.new(first_name: 'Joe', last_name: 'Ziemba')

    expect(newContact.save).to be true
  end

  it 'should return an error message if missing a first_name or last_name' do
    newContact = Contact.new
    newContact.save

    expect(newContact.errors.full_messages).to include("First name can't be blank")
    expect(newContact.errors.full_messages).to include("Last name can't be blank")
  end

  it 'should accept just names and an email' do
    newContact = Contact.new(first_name: 'Joe', last_name: 'Ziemba', email: 'test@test.com')

    expect(newContact.save).to be true
  end

  it 'should accept just names and a phone number' do
    newContact = Contact.new(first_name: 'Joe', last_name: 'Ziemba', phone: '2155555555')

    expect(newContact.save).to be true
  end

  it 'should accept just names and a company' do
    newContact = Contact.new(first_name: 'Joe', last_name: 'Ziemba', company: 'ConsenSys')

    expect(newContact.save).to be true
  end

  it 'should accept and persist all inputs' do
    newContact = Contact.new(first_name: 'Joe', last_name: 'Ziemba', email: 'test@test.com', phone: '2155555555', company: 'ConsenSys')

    expect(newContact.save).to be true
    expect(newContact.first_name).to eq('Joe')
    expect(newContact.last_name).to eq('Ziemba')
    expect(newContact.email).to eq('test@test.com')
    expect(newContact.phone).to eq('2155555555')
    expect(newContact.company).to eq('ConsenSys')
  end
end
