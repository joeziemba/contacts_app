class Api::V1::ContactsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create, :destroy]

  def index
    if Contact.all.empty?
      @contacts = { id: 0 }
    else
      @contacts = Contact.all
    end
    render json: @contacts
  end

  def create
    new_contact = Contact.new(contact_params)
    if new_contact.save
      render json: new_contact
    else
      render json: { errors: new_contact.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    contact = Contact.find(params[:id])
    contact.destroy
    render json: { message: 'Contact deleted' }
  end

  private

  def contact_params
    params.require(:contact).permit(
      :first_name,
      :last_name,
      :email,
      :phone,
      :company
    )
  end
end
