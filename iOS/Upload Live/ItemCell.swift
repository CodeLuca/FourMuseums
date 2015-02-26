//
//  ItemCell.swift
//  Upload Live
//
//  Created by Ben Gray on 21/02/2015.
//  Copyright (c) 2015 Graypfruit. All rights reserved.
//

import UIKit

class ItemCell: UITableViewCell {

    @IBOutlet var itemImageView: UIImageView!
    @IBOutlet var nameLabel: UILabel!
    @IBOutlet var datePlaceLabel: UILabel!
    @IBOutlet var locationInMuseumLabel: UILabel!
    var item: Item! {
        didSet {
            nameLabel.text = item.name
            locationInMuseumLabel.text = item.museumLocation
            let shortId = item.imageId.substringToIndex(6)
            let url = "http://media.vam.ac.uk/media/thira/collection_images/\(shortId)/\(item.imageId)_jpg_s.jpg"
            println(url)
            //let url = NSURL(string: "http://media.vam.ac.uk/media/thira/collection_images/\(shortId)/\(item.imageId)_jpg_s.jpg")
            dispatch_async(dispatch_get_main_queue()) {
                let imageData = NSData(contentsOfURL: NSURL(string: url)!)
                self.itemImageView.image = UIImage(data: imageData!)
            }
            if item.collected == true {
                
            }
        }
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }
    

    override func setSelected(selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
        
        // Configure the view for the selected state
    }

}
