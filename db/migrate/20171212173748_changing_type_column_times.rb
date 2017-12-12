class ChangingTypeColumnTimes < ActiveRecord::Migration[5.0]
  def change
    change_column :events, :start_time, :datetime
    change_column :events, :end_time, :datetime
  end
end
