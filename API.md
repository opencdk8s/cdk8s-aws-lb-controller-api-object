# API Reference

**Classes**

Name|Description
----|-----------
[AWSLoadBalancerControllerObject](#opencdk8s-cdk8s-aws-lb-controller-api-object-awsloadbalancercontrollerobject)|*No description*
[IntOrString](#opencdk8s-cdk8s-aws-lb-controller-api-object-intorstring)|*No description*


**Structs**

Name|Description
----|-----------
[AWSLoadBalancerControllerProps](#opencdk8s-cdk8s-aws-lb-controller-api-object-awsloadbalancercontrollerprops)|*No description*
[HttpIngressPath](#opencdk8s-cdk8s-aws-lb-controller-api-object-httpingresspath)|HTTPIngressPath associates a path regex with a backend.
[HttpIngressRuleValue](#opencdk8s-cdk8s-aws-lb-controller-api-object-httpingressrulevalue)|HTTPIngressRuleValue is a list of http selectors pointing to backends.
[IngressBackend](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingressbackend)|IngressBackend describes all endpoints for a given service and port.
[IngressRule](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingressrule)|IngressRule represents the rules mapping the paths under a specified host to the related backend services.
[IngressSpec](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingressspec)|IngressSpec describes the Ingress the user wishes to exist.
[IngressTls](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingresstls)|IngressTLS describes the transport layer security associated with an Ingress.
[Initializer](#opencdk8s-cdk8s-aws-lb-controller-api-object-initializer)|Initializer is information about an initializer that has not yet completed.
[Initializers](#opencdk8s-cdk8s-aws-lb-controller-api-object-initializers)|Initializers tracks the progress of initialization.
[KubeStatusProps](#opencdk8s-cdk8s-aws-lb-controller-api-object-kubestatusprops)|Status is a return value for calls that don't return other objects.
[ListMeta](#opencdk8s-cdk8s-aws-lb-controller-api-object-listmeta)|ListMeta describes metadata that synthetic resources must have, including lists and various status objects.
[ManagedFieldsEntry](#opencdk8s-cdk8s-aws-lb-controller-api-object-managedfieldsentry)|ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.
[ObjectMeta](#opencdk8s-cdk8s-aws-lb-controller-api-object-objectmeta)|ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
[OwnerReference](#opencdk8s-cdk8s-aws-lb-controller-api-object-ownerreference)|OwnerReference contains enough information to let you identify an owning object.
[StatusCause](#opencdk8s-cdk8s-aws-lb-controller-api-object-statuscause)|StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
[StatusDetails](#opencdk8s-cdk8s-aws-lb-controller-api-object-statusdetails)|StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response.



## class AWSLoadBalancerControllerObject 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-awsloadbalancercontrollerobject"></a>



__Implements__: [IConstruct](#constructs-iconstruct)
__Extends__: [ApiObject](#cdk8s-apiobject)

### Initializer


Defines an "extentions" API object for AWS Load Balancer Controller - https://github.com/kubernetes-sigs/aws-load-balancer-controller.

```ts
new AWSLoadBalancerControllerObject(scope: Construct, id: string, props?: AWSLoadBalancerControllerProps)
```

* **scope** (<code>[Construct](#constructs-construct)</code>)  the scope in which to define this object.
* **id** (<code>string</code>)  a scope-local name for the object.
* **props** (<code>[AWSLoadBalancerControllerProps](#opencdk8s-cdk8s-aws-lb-controller-api-object-awsloadbalancercontrollerprops)</code>)  initialization props.
  * **metadata** (<code>[ObjectMeta](#opencdk8s-cdk8s-aws-lb-controller-api-object-objectmeta)</code>)  Standard object's metadata. __*Optional*__
  * **spec** (<code>[IngressSpec](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingressspec)</code>)  Spec defines the behavior of the ingress. __*Optional*__



### Properties


Name | Type | Description 
-----|------|-------------
*static* **GVK**🔹 | <code>[GroupVersionKind](#cdk8s-groupversionkind)</code> | <span></span>

### Methods


#### *static* manifest(props?)🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-awsloadbalancercontrollerobject-manifest"></a>

Renders a Kubernetes manifest for an ingress object. https://github.com/kubernetes-sigs/aws-load-balancer-controller.

This can be used to inline resource manifests inside other objects (e.g. as templates).

```ts
static manifest(props?: AWSLoadBalancerControllerProps): any
```

* **props** (<code>[AWSLoadBalancerControllerProps](#opencdk8s-cdk8s-aws-lb-controller-api-object-awsloadbalancercontrollerprops)</code>)  initialization props.
  * **metadata** (<code>[ObjectMeta](#opencdk8s-cdk8s-aws-lb-controller-api-object-objectmeta)</code>)  Standard object's metadata. __*Optional*__
  * **spec** (<code>[IngressSpec](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingressspec)</code>)  Spec defines the behavior of the ingress. __*Optional*__

__Returns__:
* <code>any</code>



## class IntOrString 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-intorstring"></a>




### Methods


#### *static* fromNumber(value)🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-intorstring-fromnumber"></a>



```ts
static fromNumber(value: number): IntOrString
```

* **value** (<code>number</code>)  *No description*

__Returns__:
* <code>[IntOrString](#opencdk8s-cdk8s-aws-lb-controller-api-object-intorstring)</code>

#### *static* fromString(value)🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-intorstring-fromstring"></a>



```ts
static fromString(value: string): IntOrString
```

* **value** (<code>string</code>)  *No description*

__Returns__:
* <code>[IntOrString](#opencdk8s-cdk8s-aws-lb-controller-api-object-intorstring)</code>



## struct AWSLoadBalancerControllerProps 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-awsloadbalancercontrollerprops"></a>






Name | Type | Description 
-----|------|-------------
**metadata**?🔹 | <code>[ObjectMeta](#opencdk8s-cdk8s-aws-lb-controller-api-object-objectmeta)</code> | Standard object's metadata.<br/>__*Optional*__
**spec**?🔹 | <code>[IngressSpec](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingressspec)</code> | Spec defines the behavior of the ingress.<br/>__*Optional*__



## struct HttpIngressPath 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-httpingresspath"></a>


HTTPIngressPath associates a path regex with a backend.

Incoming urls matching the path are forwarded to the backend.



Name | Type | Description 
-----|------|-------------
**backend**🔹 | <code>[IngressBackend](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingressbackend)</code> | Backend defines the referenced service endpoint to which the traffic will be forwarded to.
**path**?🔹 | <code>string</code> | Path is an extended POSIX regex as defined by IEEE Std 1003.1, (i.e this follows the egrep/unix syntax, not the perl syntax) matched against the path of an incoming request. Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/'. If unspecified, the path defaults to a catch all sending traffic to the backend.<br/>__*Optional*__



## struct HttpIngressRuleValue 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-httpingressrulevalue"></a>


HTTPIngressRuleValue is a list of http selectors pointing to backends.

In the example: http://<host>/<path>?<searchpart> -> backend where where parts of the url correspond to RFC 3986, this resource will be used to match against everything after the last '/' and before the first '?' or '#'.



Name | Type | Description 
-----|------|-------------
**paths**🔹 | <code>Array<[HttpIngressPath](#opencdk8s-cdk8s-aws-lb-controller-api-object-httpingresspath)></code> | A collection of paths that map requests to backends.



## struct IngressBackend 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-ingressbackend"></a>


IngressBackend describes all endpoints for a given service and port.



Name | Type | Description 
-----|------|-------------
**serviceName**🔹 | <code>string</code> | Specifies the name of the referenced service.
**servicePort**🔹 | <code>[IntOrString](#opencdk8s-cdk8s-aws-lb-controller-api-object-intorstring)</code> | Specifies the port of the referenced service.



## struct IngressRule 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-ingressrule"></a>


IngressRule represents the rules mapping the paths under a specified host to the related backend services.

Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.



Name | Type | Description 
-----|------|-------------
**host**?🔹 | <code>string</code> | Host is the fully qualified domain name of a network host, as defined by RFC 3986.<br/>__*Optional*__
**http**?🔹 | <code>[HttpIngressRuleValue](#opencdk8s-cdk8s-aws-lb-controller-api-object-httpingressrulevalue)</code> | __*Optional*__



## struct IngressSpec 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-ingressspec"></a>


IngressSpec describes the Ingress the user wishes to exist.



Name | Type | Description 
-----|------|-------------
**backend**?🔹 | <code>[IngressBackend](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingressbackend)</code> | A default backend capable of servicing requests that don't match any rule.<br/>__*Optional*__
**rules**?🔹 | <code>Array<[IngressRule](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingressrule)></code> | A list of host rules used to configure the Ingress.<br/>__*Optional*__
**tls**?🔹 | <code>Array<[IngressTls](#opencdk8s-cdk8s-aws-lb-controller-api-object-ingresstls)></code> | TLS configuration.<br/>__*Optional*__



## struct IngressTls 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-ingresstls"></a>


IngressTLS describes the transport layer security associated with an Ingress.



Name | Type | Description 
-----|------|-------------
**hosts**?🔹 | <code>Array<string></code> | Hosts are a list of hosts included in the TLS certificate.<br/>__*Default*__: the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.
**secretName**?🔹 | <code>string</code> | SecretName is the name of the secret used to terminate SSL traffic on 443.<br/>__*Optional*__



## struct Initializer 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-initializer"></a>


Initializer is information about an initializer that has not yet completed.



Name | Type | Description 
-----|------|-------------
**name**🔹 | <code>string</code> | name of the process that is responsible for initializing this object.



## struct Initializers 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-initializers"></a>


Initializers tracks the progress of initialization.



Name | Type | Description 
-----|------|-------------
**pending**🔹 | <code>Array<[Initializer](#opencdk8s-cdk8s-aws-lb-controller-api-object-initializer)></code> | Pending is a list of initializers that must execute in order before this object is visible.
**result**?🔹 | <code>[KubeStatusProps](#opencdk8s-cdk8s-aws-lb-controller-api-object-kubestatusprops)</code> | If result is set with the Failure field, the object will be persisted to storage and then deleted, ensuring that other clients can observe the deletion.<br/>__*Optional*__



## struct KubeStatusProps 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-kubestatusprops"></a>


Status is a return value for calls that don't return other objects.



Name | Type | Description 
-----|------|-------------
**code**?🔹 | <code>number</code> | Suggested HTTP return code for this status, 0 if not set.<br/>__*Optional*__
**details**?🔹 | <code>[StatusDetails](#opencdk8s-cdk8s-aws-lb-controller-api-object-statusdetails)</code> | Extended data associated with the reason.<br/>__*Optional*__
**message**?🔹 | <code>string</code> | A human-readable description of the status of this operation.<br/>__*Optional*__
**metadata**?🔹 | <code>[ListMeta](#opencdk8s-cdk8s-aws-lb-controller-api-object-listmeta)</code> | Standard list metadata.<br/>__*Optional*__
**reason**?🔹 | <code>string</code> | A machine-readable description of why this operation is in the "Failure" status.<br/>__*Optional*__



## struct ListMeta 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-listmeta"></a>


ListMeta describes metadata that synthetic resources must have, including lists and various status objects.

A resource may have only one of {ObjectMeta, ListMeta}.



Name | Type | Description 
-----|------|-------------
**continue**?🔹 | <code>string</code> | continue may be set if the user set a limit on the number of items returned, and indicates that the server has more data available.<br/>__*Optional*__
**remainingItemCount**?🔹 | <code>number</code> | remainingItemCount is the number of subsequent items in the list which are not included in this list response.<br/>__*Optional*__
**resourceVersion**?🔹 | <code>string</code> | String that identifies the server's internal version of this object that can be used by clients to determine when objects have changed.<br/>__*Optional*__
**selfLink**?🔹 | <code>string</code> | selfLink is a URL representing this object.<br/>__*Optional*__



## struct ManagedFieldsEntry 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-managedfieldsentry"></a>


ManagedFieldsEntry is a workflow-id, a FieldSet and the group version of the resource that the fieldset applies to.



Name | Type | Description 
-----|------|-------------
**apiVersion**?🔹 | <code>string</code> | APIVersion defines the version of this resource that this field set applies to.<br/>__*Optional*__
**fields**?🔹 | <code>any</code> | Fields identifies a set of fields.<br/>__*Optional*__
**manager**?🔹 | <code>string</code> | Manager is an identifier of the workflow managing these fields.<br/>__*Optional*__
**operation**?🔹 | <code>string</code> | Operation is the type of operation which lead to this ManagedFieldsEntry being created.<br/>__*Optional*__
**time**?🔹 | <code>date</code> | Time is timestamp of when these fields were set.<br/>__*Optional*__



## struct ObjectMeta 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-objectmeta"></a>


ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.



Name | Type | Description 
-----|------|-------------
**annotations**?🔹 | <code>Map<string, string></code> | Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata.<br/>__*Optional*__
**clusterName**?🔹 | <code>string</code> | The name of the cluster which the object belongs to.<br/>__*Optional*__
**creationTimestamp**?🔹 | <code>date</code> | CreationTimestamp is a timestamp representing the server time when this object was created.<br/>__*Optional*__
**deletionGracePeriodSeconds**?🔹 | <code>number</code> | Number of seconds allowed for this object to gracefully terminate before it will be removed from the system.<br/>__*Optional*__
**deletionTimestamp**?🔹 | <code>date</code> | DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted.<br/>__*Optional*__
**finalizers**?🔹 | <code>Array<string></code> | Must be empty before the object is deleted from the registry.<br/>__*Optional*__
**generateName**?🔹 | <code>string</code> | GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided.<br/>__*Optional*__
**generation**?🔹 | <code>number</code> | A sequence number representing a specific generation of the desired state.<br/>__*Optional*__
**initializers**?🔹 | <code>[Initializers](#opencdk8s-cdk8s-aws-lb-controller-api-object-initializers)</code> | An initializer is a controller which enforces some system invariant at object creation time.<br/>__*Optional*__
**labels**?🔹 | <code>Map<string, string></code> | Map of string keys and values that can be used to organize and categorize (scope and select) objects.<br/>__*Optional*__
**managedFields**?🔹 | <code>Array<[ManagedFieldsEntry](#opencdk8s-cdk8s-aws-lb-controller-api-object-managedfieldsentry)></code> | ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow.<br/>__*Optional*__
**name**?🔹 | <code>string</code> | Name must be unique within a namespace.<br/>__*Optional*__
**namespace**?🔹 | <code>string</code> | Namespace defines the space within each name must be unique.<br/>__*Optional*__
**ownerReferences**?🔹 | <code>Array<[OwnerReference](#opencdk8s-cdk8s-aws-lb-controller-api-object-ownerreference)></code> | List of objects depended by this object.<br/>__*Optional*__
**resourceVersion**?🔹 | <code>string</code> | An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed.<br/>__*Optional*__
**selfLink**?🔹 | <code>string</code> | SelfLink is a URL representing this object.<br/>__*Optional*__
**uid**?🔹 | <code>string</code> | UID is the unique in time and space value for this object.<br/>__*Optional*__



## struct OwnerReference 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-ownerreference"></a>


OwnerReference contains enough information to let you identify an owning object.

An owning object must be in the same namespace as the dependent, or be cluster-scoped, so there is no namespace field.



Name | Type | Description 
-----|------|-------------
**apiVersion**🔹 | <code>string</code> | API version of the referent.
**kind**🔹 | <code>string</code> | Kind of the referent.
**name**🔹 | <code>string</code> | Name of the referent.
**uid**🔹 | <code>string</code> | UID of the referent.
**blockOwnerDeletion**?🔹 | <code>boolean</code> | If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed.<br/>__*Default*__: false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
**controller**?🔹 | <code>boolean</code> | If true, this reference points to the managing controller.<br/>__*Optional*__



## struct StatusCause 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-statuscause"></a>


StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.



Name | Type | Description 
-----|------|-------------
**field**?🔹 | <code>string</code> | The field of the resource that has caused this error, as named by its JSON serialization.<br/>__*Optional*__
**message**?🔹 | <code>string</code> | A human-readable description of the cause of the error.<br/>__*Optional*__
**reason**?🔹 | <code>string</code> | A machine-readable description of the cause of the error.<br/>__*Optional*__



## struct StatusDetails 🔹 <a id="opencdk8s-cdk8s-aws-lb-controller-api-object-statusdetails"></a>


StatusDetails is a set of additional properties that MAY be set by the server to provide additional information about a response.

The Reason field of a Status object defines what attributes will be set. Clients must ignore fields that do not match the defined type of each attribute, and should assume that any attribute may be empty, invalid, or under defined.



Name | Type | Description 
-----|------|-------------
**causes**?🔹 | <code>Array<[StatusCause](#opencdk8s-cdk8s-aws-lb-controller-api-object-statuscause)></code> | The Causes array includes more details associated with the StatusReason failure.<br/>__*Optional*__
**group**?🔹 | <code>string</code> | The group attribute of the resource associated with the status StatusReason.<br/>__*Optional*__
**kind**?🔹 | <code>string</code> | The kind attribute of the resource associated with the status StatusReason.<br/>__*Optional*__
**name**?🔹 | <code>string</code> | The name attribute of the resource associated with the status StatusReason (when there is a single name which can be described).<br/>__*Optional*__
**retryAfterSeconds**?🔹 | <code>number</code> | If specified, the time in seconds before the operation should be retried.<br/>__*Optional*__
**uid**?🔹 | <code>string</code> | UID of the resource.<br/>__*Optional*__



