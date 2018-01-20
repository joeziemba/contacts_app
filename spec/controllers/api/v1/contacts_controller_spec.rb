require 'rails_helper'

describe Api::V1::ContactsController, type: :controller do

  let!(:testContact) { create(:contact) }

  describe 'GET#index' do
    it "should return a successful JSON response" do
      get :index

      expect(response.status).to eq 200
      expect(response.header['Content-Type']).to include 'application/json'
    end

    it "should include all contacts from the database" do
      get :index
      data = JSON.parse(response.body)

      expect(data.length).to eq Contact.all.count
    end

    it "should include all data from each contact" do
      get :index
      data = JSON.parse(response.body)
      keys = data[0].keys

      expect(keys.length).to eq 8
      expect(keys).to include 'id'
      expect(keys).to include 'first_name'
      expect(keys).to include 'last_name'
      expect(keys).to include 'email'
      expect(keys).to include 'phone'
      expect(keys).to include 'company'
      expect(keys).to include 'created_at'
      expect(keys).to include 'updated_at'
    end

    it "should match the values from the database" do
      get :index
      data = JSON.parse(response.body)

      expect(data[0]['id']).to eq testContact.id
      expect(data[0]['first_name']).to eq testContact.first_name
      expect(data[0]['last_name']).to eq testContact.last_name
      expect(data[0]['email']).to eq testContact.email
      expect(data[0]['phone']).to eq testContact.phone
      expect(data[0]['company']).to eq testContact.company
    end
  end

  describe "POST#create" do
    it "should return a successful JSON response with a first & last name" do
      post :create, params: { contact: { first_name: 'Sterling', last_name: 'Archer' } }
      expect(response.status).to eq 200
      expect(response.header['Content-Type']).to include 'application/json'
    end

    it "should create a new Contact in the database with a first & last name" do
      expect{ post :create, params: { contact: { first_name: 'Sterling', last_name: 'Archer' } } }.to change{ Contact.all.count }.by(1)
    end

    it "should return an unsuccessful (422) JSON response when missing first name" do
      post :create, params: { contact: { first_name: '', last_name: 'Archer' } }

      expect(response.status).to eq 422
      expect(response.header['Content-Type']).to include 'application/json'
    end

    it "should return an unsuccessful (422) JSON response when missing last name" do
      post :create, params: { contact: { first_name: 'Sterling', last_name: '' } }

      expect(response.status).to eq 422
      expect(response.header['Content-Type']).to include 'application/json'
    end

    it "should save to the dataallow an email, phone number and company name" do
      count = Contact.all.count
      post :create, params: {
        contact: {
          first_name: 'Sterling',
          last_name: 'Archer',
          email: 'dutchess@figgisagency.com',
          phone: '123456789',
          company: 'The Figgis Agency'
        }
      }

      expect(Contact.all.count).to be > count
    end
  end
end
