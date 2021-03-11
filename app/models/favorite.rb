class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :thought

  validates :user_id, :uniqueness => {:scope => :thought_id}
end
