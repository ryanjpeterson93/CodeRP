class Api::ContactsController < ApplicationController
  before_action :set_contact, only: [:show, :edit, :destroy, :update]
  
  def index
    render json: Contact.all
  end

  def show

  end

  def create
    contact = Contact.new(contact_params)

    file = params[:file]
    
    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true)

        contact.photo = cloud_image["secure_url"]
        
      rescue => e
        render json: { errors: e }, status: 422
        return
      end
    end
    if contact.save
      render json: contact
    else
      render json: { errors: contact.errors.full_messages }, status: 422
    end
  end

  def update

  end

  def destroy
    @contact.destroy
    render json: { message: 'contact deleted.' }
  end

private
  def contact_params
    params.permit(:title, :body, :photo, :name, :email, :phone)
  end

  def set_contact
    @contact = contacts.find(params[:id])
  end
end
