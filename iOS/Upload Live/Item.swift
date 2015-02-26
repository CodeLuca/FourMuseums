//
//  Item.swift
//  Upload Live
//
//  Created by Ben Gray on 21/02/2015.
//  Copyright (c) 2015 Graypfruit. All rights reserved.
//

import UIKit
import CoreLocation

class Item: NSObject {
    
    var name: NSString!
    var location: CLLocationCoordinate2D!
    var locationDescription: NSString!
    var date: NSNumber!
    var museumLocation: NSString!
    var id: NSString!
    var imageId: NSString!
    var collected: Bool = false
    
    init(name : NSString, location : CLLocationCoordinate2D, locationDescription: NSString, date: NSNumber, museumLocation: NSString, id: NSString, imageId: NSString) {
        self.name = name
        self.location = location
        self.locationDescription = locationDescription
        self.date = date
        self.museumLocation = museumLocation
        self.id = id
        self.imageId = imageId
    }
}
