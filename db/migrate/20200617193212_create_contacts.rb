class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.text :body
      t.string :title
      t.string :name
      t.string :email
      t.string :phone
      t.string :photo

      t.timestamps
    end
  end
end
