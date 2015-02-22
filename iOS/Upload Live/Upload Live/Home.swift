//
//  ViewController.swift
//  Upload Live
//
//  Created by Ben Gray on 21/02/2015.
//  Copyright (c) 2015 Graypfruit. All rights reserved.
//

import UIKit

class ViewController: UITableViewController {

//    let dataUrl = NSURL(string: "http://www.vam.ac.uk/api/json/museumobject")
    let dataUrl = NSURL(string: "http://10.0.1.196:7000/")
    var items = [Item]()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        getData()
    }
    
    func getData() {
        println(dataUrl)
        let data = NSData(contentsOfURL: dataUrl!)
        
        let task = NSURLSession.sharedSession().dataTaskWithURL(dataUrl!) {(data, response, error) in
            var jsonError: NSError?
            let json = NSJSONSerialization.JSONObjectWithData(data, options: nil, error: &jsonError) as NSArray
            
            if let unwrappedError = jsonError {
                println("json error: \(unwrappedError)")
            } else {
                println(json);
            }
        }
        task.resume()
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func tableView(tableView: UITableView, cellForRowAtIndexPath indexPath: NSIndexPath) -> UITableViewCell {
        var cell = tableView.dequeueReusableCellWithIdentifier("ItemCell") as ItemCell
        cell.item = items[indexPath.row]
        return cell
    }
    
    override func numberOfSectionsInTableView(tableView: UITableView) -> Int {
        return 1
    }
    
    override func tableView(tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    
    override func tableView(tableView: UITableView, didSelectRowAtIndexPath indexPath: NSIndexPath) {
        let vc: UIViewController = self.storyboard!.instantiateViewControllerWithIdentifier("Scanner") as UIViewController
        self.navigationController!.pushViewController(vc, animated: true)
    }

}