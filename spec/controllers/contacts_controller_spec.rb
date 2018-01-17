require 'rails_helper'

RSpec.describe ContactsController, type: :controller do
  it 'should have an index method that renders the index template' do
    get :index
    assert_response :success
    render_template :index
  end
end
