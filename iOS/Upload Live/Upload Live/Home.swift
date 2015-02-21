//
//  ViewController.swift
//  Upload Live
//
//  Created by Ben Gray on 21/02/2015.
//  Copyright (c) 2015 Graypfruit. All rights reserved.
//

import UIKit
import CoreLocation

class ViewController: UITableViewController {

//    let dataUrl = NSURL(string: "http://www.vam.ac.uk/api/json/museumobject")
    let dataUrl = NSURL(string: "http://172.16.56.81/")
    var items = [Item]()
    var doneIds = [NSString]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        UIApplication.sharedApplication().setStatusBarStyle(.LightContent, animated: true)
        getData()
    }
    
    func getData() {
        let data = NSData(contentsOfURL: dataUrl!)
        //let task = NSURLSession.sharedSession().dataTaskWithURL(dataUrl!) {(data, response, error) in
            var jsonError: NSError?
            let json = NSJSONSerialization.JSONObjectWithData(data!, options: nil, error: &jsonError) as NSArray
            
            if let unwrappedError = jsonError {
                println("json error: \(unwrappedError)")
            } else {
                for i: NSDictionary in json as [NSDictionary] {
                    println(json)
                    let name = i["Name"] as NSString
                    let coordinate = CLLocationCoordinate2DMake(i["Latitude"]!.doubleValue, i["Longitude"]!.doubleValue)
                    let imageId = i["image_id"] as NSString
                    let museumDescription = i["Location"] as NSString
                    let date = i["Date"] as NSNumber
                    let place = i["Place"] as NSString
                    let id = i["pk"] as NSString
                    let item = Item(name: name, location: coordinate, locationDescription: place, date: date, museumLocation: museumDescription, id: id, imageId: imageId)
                    self.items.append(item)
                }
                self.tableView.reloadData()
            }
        //}
        //task.resume()
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        var cell = tableView.dequeueReusableCellWithIdentifier("ItemCell") as ItemCell
        cell.item = items[indexPath.row]
        var scanned = NSUserDefaults.standardUserDefaults().boolForKey(items[indexPath.row].id)
        if (scanned) {
            cell.userInteractionEnabled = false;
        }
        return cell
    }
    
    override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        return 1
    }
    
    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        var vc: QRScanner = self.storyboard!.instantiateViewControllerWithIdentifier("Scanner") as QRScanner
        vc.itemId = items[indexPath.row].id
        self.navigationController!.pushViewController(vc, animated: true)
    }
    
    
    
}