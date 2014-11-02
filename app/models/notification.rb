class Notification < ActiveRecord::Base
	belongs_to :actor, :class_name => "User"
	has_many :notification_statuses
	has_many :victims, :through => :notification_statuses, :class_name => "User", :foreign_key => "victim_id"

	# This class has the following information - 
	# Actor - the person responsible for the action
	# Action - [0: Commented, 1: Followed Project, 2: Forked, 3: Followed User]
	# Object_type [0: Project, 1: Comment, 2: User]
	# Object_id - ID of the object
	# Victims - the people to be notified 

	after_create :send_emails
	def send_emails
		for victim in self.victims
			NotifMailer.notif_email(self,victim).deliver
		end
	end

	def messageverb
		if action == 0
			return " commented on "
		elsif action == 1 or action == 3
			return " followed "
		end		
	end

	def objectname
		if action == 0 
			comment = Comment.find(object_id)
			return Project.find(comment.polycomment_id).name
		elsif action == 3
			return User.find(object_id).username
		end
	end
	
	def url
		if action == 0
			# TODO - It'd be better if we could link directly to a comment, using a hash in the url.			
			comment = Comment.find(object_id)
			return Project.find(comment.polycomment_id).urlbase
		else
			return "/#{actor.username}"
		end
	end

end
